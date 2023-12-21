import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT ?? 4000,
  CORS_ORIGIN: process.env.CORS_ORIGIN ?? "*",
  MONGOOSE_URI: process.env.MONGOOSE_URI ?? "mongodb://127.0.0.1:27017/hr-management",
}

export default config;