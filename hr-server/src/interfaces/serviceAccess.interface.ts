import { Types } from "mongoose";

export interface IServiceAccess {
  userId: Types.ObjectId,
  services: string[],
}