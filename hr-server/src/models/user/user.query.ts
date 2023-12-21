import { Types } from "mongoose";
import User from "./user.model";
import { IUser } from "../../interfaces/user.interface";

export async function findUserById (id: string | Types.ObjectId) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Error while finding user by ID in database.');
  }
}

export async function createUser (data: IUser) {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Error while creating new user in database.');
  }
}