import { model, Schema } from "mongoose";
import { IServiceAccess } from "../../interfaces/serviceAccess.interface";

const serviceAccessSchema = new Schema<IServiceAccess>({
  userId: {
    type: Schema.ObjectId,
    required: true,
    ref: 'user'
  },
  services: {
    type: [String],
    required: true,
  }
});

const ServiceAccess = model('service-access', serviceAccessSchema);

export default ServiceAccess;