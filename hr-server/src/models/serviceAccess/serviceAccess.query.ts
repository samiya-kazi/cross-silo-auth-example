import { Types } from "mongoose";
import ServiceAccess from "./serviceAccess.model";
import { IServiceAccess } from "../../interfaces/serviceAccess.interface";


export async function createUserServiceAccess (data: IServiceAccess) {
  try {
    const access = await ServiceAccess.create(data);
    return access;
  } catch (error) {
    console.log(error);
    throw new Error('Error while creating user service access in database.');
  }
}

export async function updateUserServiceAccess (serviceAccessId: string | Types.ObjectId , data: IServiceAccess) {
  try {
    const access = await ServiceAccess.findByIdAndUpdate(serviceAccessId, data, { new: true });
    return access;
  } catch (error) {
    console.log(error);
    throw new Error('Error while updating user service access in database.');
  }
}

export async function findUserServiceAccess (userId: Types.ObjectId | string) {
  try {
    const access = await ServiceAccess.findOne({ userId });
    return access;
  } catch (error) {
    console.log(error);
    throw new Error('Error while getting use service access from database.')
  }
}

export async function checkUserServiceAccess (userId: Types.ObjectId | string, service: string) {
  try {
    const userServiceAccess = await ServiceAccess.findOne({ userId });
    if (userServiceAccess) {
      return (userServiceAccess.services.includes('all') || userServiceAccess.services.includes(service));
    }
    return false;
  } catch (error) {
    console.log(error);
    throw new Error('Error while checking user service access from database.');
  }
}