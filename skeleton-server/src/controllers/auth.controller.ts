import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { validateLoginData } from "../utils/validation.helpers";
import { hrLogin } from "../utils/hr.helper";
import config from "../config";

export async function login (req: Request, res: Response) {
  try {
    const { email, password, service } = req.body;

    if (validateLoginData({ email, password, service })) {
      const { user } = await hrLogin({ email, password, service });

      const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
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