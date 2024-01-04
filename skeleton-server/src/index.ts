import express, { Express } from 'express';
import cors from 'cors';
import config from './config';
import serviceAuthRouter from './routers/serviceAuth.router';
import authRouter from './routers/auth.router';

const app : Express = express();

app.use(cors({
  origin: config.CORS_ORIGIN.split(','),
  credentials: true,
  exposedHeaders: ['Authorization']
}));

app.use(express.json());
app.use('/auth', authRouter);
app.use('/service-auth', serviceAuthRouter);

app.listen(config.PORT, () => console.log('[server]: Server is listening on port', config.PORT));