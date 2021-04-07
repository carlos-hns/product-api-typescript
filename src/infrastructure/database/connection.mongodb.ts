import mongoose, { Connection, connection } from "mongoose";
import { IConnection, IMongoConnectionVerify } from "./iconnection";

export class MongoConnection implements IConnection, IMongoConnectionVerify {

  connection: Connection;
  
  async makeConnection(uri: string): Promise<void> {
    mongoose.connect(uri,  {useNewUrlParser: true, useUnifiedTopology: true});
    this.connection = mongoose.connection;
    
    try {
      this.verifySuccessfulConnection((connected: Boolean) => {
        if(!connected) throw new Error("Conexão com o banco falhou!");
        else console.log("Mongoose conectado com sucesso!");
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async revokeConnection(): Promise<void> {
    connection.close();
  }

  async verifySuccessfulConnection(callback: Function): Promise<void> {
    this.connection.on('error', () => callback(false));
    this.connection.once('open', () => callback(true));
  }
}