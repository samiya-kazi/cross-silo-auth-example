import express, { Express } from 'express';
import cors from 'cors';
import config from './config';
import serviceAuthRouter from './routers/serviceAuth.router';
import authRouter from './routers/auth.router';
import mongoose from 'mongoose';

const app : Express = express();

app.use(cors({
  origin: config.CORS_ORIGIN.split(','),
  credentials: true,
  exposedHeaders: ['Authorization']
}));

app.use(express.json());
app.use('/auth', authRouter);
app.use('/service-auth', serviceAuthRouter);

(async function bootstrap () {
  try {
    await mongoose.connect(config.MONGOOSE_URI);
    console.log('[server]: Connected to DB.');
    app.listen(config.PORT, () => console.log('[server]: Server is listening on port', config.PORT));
  } catch (error) {
    console.log('[server]:', error)
  }
})();