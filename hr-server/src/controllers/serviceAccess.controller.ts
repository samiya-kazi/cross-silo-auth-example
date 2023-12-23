import { Request, Response } from "express";
import { findUserById } from "../models/user/user.query";
import { validateServices } from "../utils/validation.helpers";
import { createUserServiceAccess, findUserServiceAccess, updateUserServiceAccess } from "../models/serviceAccess/serviceAccess.query";

export async function postServiceAccess (req: Request, res: Response) {
  try {
    const id = req.params.id;
    const { services } = req.body;
    const user = await findUserById(id);
    if (user && validateServices(services)) {
      const prevServiceAccess = await findUserServiceAccess(user._id);
      let access;
      const data = {
        userId: user._id, 
        services
      }

      if (prevServiceAccess)
        access = await updateUserServiceAccess(prevServiceAccess._id, data);
      else
        access = await createUserServiceAccess(data);

      res.status(201).send({ status: "success", access });
    } else res.status(400).send({ message: 'Invalid user ID or services.'})
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}

export async function checkServiceAccess (req: Request, res: Response) {
  try {
    const { userId, service } = req.body;
    const user = await findUserById(userId);
    if (user && typeof service === 'string') {
      const serviceAccess = await findUserServiceAccess(user._id);
      if (serviceAccess && (serviceAccess.services.includes("all") || serviceAccess.services.includes(service))) {
        res.status(200).send({ status: 'success', auth: true });
      } else res.status(400).send({ status: 'fail', auth: false });
    } else res.status(400).send({ message: 'Invalid user ID or services.'})
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}