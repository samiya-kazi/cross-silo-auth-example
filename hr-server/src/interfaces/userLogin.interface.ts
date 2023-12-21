import { Types } from "mongoose";

export interface IUserLogin {
  email: string,
  password: string,
  userId: Types.ObjectId
}