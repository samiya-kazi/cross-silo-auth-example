import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT ?? 4000,
  CORS_ORIGIN: process.env.CORS_ORIGIN ?? "*",
  JWT_SECRET: process.env.JWT_SECRET ?? "jwt_secret",
  MONGOOSE_URI: process.env.MONGOOSE_URI ?? 'mongodb://127.0.0.1:27017/bento-skeleton',
  HR_BASE_URL: process.env.HR_BASE_URL ?? "http://localhost:4000",
  POS_BASE_URL: process.env.POS_BASE_URL ?? "http://localhost:4001",
  KDS_BASE_URL: process.env.KDS_BASE_URL ?? "http://localhost:4002",
  INVENTORY_BASE_URL: process.env.INVENTORY_BASE_URL ?? "http://localhost:4003",
  MENU_BASE_URL: process.env.MENU_BASE_URL ?? "http://localhost:4004",
  REVIEW_BASE_URL: process.env.HR_BASE_URL ?? "http://localhost:4005"
}

export default config;