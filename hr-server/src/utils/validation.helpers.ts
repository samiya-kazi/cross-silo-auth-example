import { IUser } from "../interfaces/user.interface";

export function validateUserData(data: any): data is IUser {
  return (
    typeof data === 'object' &&
    typeof data.name === 'string' &&
    typeof data.email === 'string' &&
    (data.role === 'admin' || data.role === 'employee')
  );
}

export function validateLoginData(data: any): data is { email: string, password: string } {
  return (
    typeof data === 'object' &&
    typeof data.email === 'string' &&
    typeof data.password === 'string'
  );
}