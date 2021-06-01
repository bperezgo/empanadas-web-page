import { Db, MongoClient } from 'mongodb';
import { IMongoConfig } from '../interfaces/mongoConfig.interface';

export class MongoDB {
  private url: string;
  private dbName: string;
  private client: MongoClient;
  constructor(config: IMongoConfig) {
    this.url = this.generateUrl(config);
    this.dbName = config.database;
    this.client = new MongoClient(this.url);
  }

  public async getDbInstance(): Promise<Db> {
    const connection = await this.client.connect();
    const db = connection.db(this.dbName);
    return db;
  }

  private generateUrl(config: IMongoConfig): string {
    const { username, password, host, port, database } = config;
    return `mongodb://${username}:${password}@${host}:${port}/${database}`;
  }
}
