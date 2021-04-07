import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

export { app };