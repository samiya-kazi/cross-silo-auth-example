import { model, Schema } from "mongoose";
import { IUser } from "../../interfaces/user.interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'employee']
  }
});

const User = model('user', userSchema);

export default User;