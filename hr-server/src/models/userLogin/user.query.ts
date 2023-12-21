import { IUserLogin } from "../../interfaces/userLogin.interface";
import UserLogin from "./userLogin.model";

export async function findUserLoginByEmail (email: string) {
  try {
    const login = await UserLogin.find({ email });
    return login;
  } catch (error) {
    console.log(error);
    throw new Error('Error while finding user login with email from database.');
  }
}

export async function createUserLogin (data: IUserLogin) {
  try {
    const login = await UserLogin.create(data);
    return login;
  } catch (error) {
    console.log(error);
    throw new Error('Error while creating user login in database.');
  }
}