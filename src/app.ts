import express from 'express';
import qs from 'query-strings-parser';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(qs());
app.use(router);

export { app };