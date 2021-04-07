export interface IConnection {
  makeConnection(uri: string): Promise<void>;
  revokeConnection(): Promise<void>;
}

export interface IMongoConnectionVerify {
  verifySuccessfulConnection(callback: Function): Promise<void>;
}

export interface SequelizeVerifier {
  verifySuccessfulConnection(): Promise<boolean>;
}