import { MongoDB } from './db/mongoDb';
import { IMongoConfig } from './interfaces/mongoConfig.interface';

export class Connection {
  static connection: MongoDB | null;
  static createConnection(config: IMongoConfig): MongoDB {
    this.connection = new MongoDB(config);
    return this.connection;
  }

  static async getConnection() {
    if (!this.connection) throw new Error('Not connection exists yet');
    return this.connection;
  }
}
