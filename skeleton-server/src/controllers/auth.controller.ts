import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { validateLoginData } from "../utils/validation.helpers";
import { hrLogin, hrServiceCheck, hrServiceList } from "../utils/hr.helper";
import config from "../config";
import { AuthRequest } from "../interfaces/authRequest.interface";

export async function login (req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (validateLoginData({ email, password })) {
      const { user } = await hrLogin({ email, password });

      const token = jwt.sign({ id: user._id, service: 'skeleton' }, config.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.setHeader("Authorization", "Bearer " + token);
      res.send({ status: "success", user });
    } else res.status(400).send({ message: 'Invalid data.' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}


export async function checkServiceAccess (req: AuthRequest, res: Response) {
  try {
    const { id, service } = req;

    if (id && service) {
      const check = await hrServiceCheck({ userId: id, service });
      if (check.auth) res.send({ auth: true });
      else res.status(403).send({ auth: false });
    } else res.status(403).send({ auth: false });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}


export async function getServices (req: AuthRequest, res: Response) {
  try {
    const { id } = req;

    if (id) {
      const data = await hrServiceList(id);
      res.send(data);
    } else res.status(403).send({ auth: false });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}