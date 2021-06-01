import { Model } from './model';
import { Connection } from './connection';

export class Repository<T extends Model> {
  private collection: string;
  constructor(collection: string) {
    this.collection = collection;
  }

  async find(): Promise<T[]> {
    const connection = await Connection.getConnection();
    const db = await connection.getDbInstance();
    const data = await db.collection<T>(this.collection).find().toArray();
    return data;
  }
}
