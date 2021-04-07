import { app } from './app';
import { IConnection } from './infrastructure/database/iconnection';

export class ServerSetup {
  constructor(
    private port: Number, 
    private databaseConnection: IConnection,
    private mongoUri: string
    ) {}

  init() {
    this.databaseConnection.makeConnection(this.mongoUri);
    app.listen(this.port, () => {
      console.log("API rodando, na porta: " + this.port + ".");
    });
  }
}

