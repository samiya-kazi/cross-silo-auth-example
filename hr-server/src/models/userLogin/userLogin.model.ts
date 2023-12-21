import { model, Schema } from "mongoose";
import { IUserLogin } from "../../interfaces/userLogin.interface";

const userLoginSchema = new Schema<IUserLogin>({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.ObjectId,
    required: true,
    ref: 'user'
  }
});

const UserLogin = model('user-login', userLoginSchema);

export default UserLogin;