import "reflect-metadata";
import express from 'express';
import qs from 'query-strings-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { DIContainer } from './di/di';

let server = new InversifyExpressServer(DIContainer);
server.setConfig((app) => {
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(qs());
});

const app = express();
app.use(server.build());

export { app };