import express, { Express } from 'express';
import cors from 'cors';
import config from './config';

const app : Express = express();

app.use(cors({
  origin: config.CORS_ORIGIN.split(',')
}));

app.use(express.json());

app.listen(config.PORT, () => console.log('[server]: Server is listening on port', config.PORT));