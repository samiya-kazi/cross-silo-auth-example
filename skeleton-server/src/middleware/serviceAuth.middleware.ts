import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken';
import config from "../config";
import { AuthRequest } from "../interfaces/authRequest.interface";


export async function serviceAuthMiddleware (req: AuthRequest, res: Response, next: NextFunction) {
  try {
    const authHeaders = req.headers['authorization'];
    if (!authHeaders) return res.status(401).send({ message: "Unauthorized."});
    const token = authHeaders.split(' ')[1];

    const data = jwt.verify(token, config.JWT_SECRET) as { id?: string, service?: string };

    if (data.id && data.service) {
      req.id = data.id;
      req.service = data.service;
      next();
    } else return res.status(401).send({ message: "Unauthorized."});
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: (error as Error).message });
  }
}