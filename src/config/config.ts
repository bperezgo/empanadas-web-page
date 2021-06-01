import { IConfig } from '../lib/interfaces/config.interface';

export const config: IConfig = {
  // MONGO DB
  mongoConfig: {
    username: process.env.MONGO_USERNAME || '',
    password: process.env.MONGO_PASSWORD || '',
    host: process.env.MONGO_HOST || '',
    port: process.env.MONGO_DB ? parseInt(process.env.MONGO_DB, 10) : 27017,
    database: process.env.MONGO_DB || '',
  },
};
