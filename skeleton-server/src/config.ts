import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT ?? 4000,
  CORS_ORIGIN: process.env.CORS_ORIGIN ?? "*",
  HR_BASE_URL: process.env.HR_BASE_URL ?? "http://localhost:4000",
  JWT_SECRET: process.env.JWT_SECRET ?? "jwt_secret"
}

export default config;