import { Types } from "mongoose";
import ServiceTokenStore from "./serviceTokeStore.model";

export async function createServiceTokenStore (token: string) {
  try {
    const newStore = await ServiceTokenStore.create({token, created: new Date()});
    return newStore;
  } catch (error) {
    console.log(error);
    throw new Error((error as Error).message);
  }
}


export async function findServiceTokenStore (id: string | Types.ObjectId) {
  try {
    const store = await ServiceTokenStore.findById(id);
    return store;
  } catch (error) {
    console.log(error);
    throw new Error((error as Error).message);
  }
}