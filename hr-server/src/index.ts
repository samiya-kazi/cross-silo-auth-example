import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config';

const app : Express = express();

app.use(cors({
  origin: config.CORS_ORIGIN.split(',')
}));

app.use(express.json());

(async function bootstrap () {
  try {
    await mongoose.connect(config.MONGOOSE_URI);
    console.log('[server]: Connected to DB.');
    app.listen(config.PORT, () => console.log('[server]: Server is listening on port', config.PORT));
  } catch (error) {
    console.log('[server]:', error)
  }
})();