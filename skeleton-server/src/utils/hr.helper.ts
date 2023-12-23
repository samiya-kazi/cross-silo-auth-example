import axios, { AxiosError } from 'axios';
import config from '../config';
import { IUser } from '../interfaces/user.interface';

export async function hrLogin (data : { email: string, password: string, service: string }) {
  try {
    const res = await axios.post<{status: string, user: IUser}>(config.HR_BASE_URL + '/auth/login', data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error((error as AxiosError<{message: string}>).response?.data.message);
  }
}


export async function hrServiceCheck (data : { userId: string, service: string }) {
  try {
    const res = await axios.post<{status: string, auth: boolean}>(config.HR_BASE_URL + '/access/check', data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error((error as AxiosError<{message: string}>).response?.data.message);
  }
}