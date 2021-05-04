import { MongoConnection } from "./infrastructure/database/connection.mongodb";
import { ServerSetup } from "./ServerSetup";

const mongoConnection = new MongoConnection();
const server = new ServerSetup(9001, mongoConnection, "mongodb://127.0.0.1:27017/productcontrol");
server.init();