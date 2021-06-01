import { ObjectId } from 'mongodb';

export class EmpanadasModel {
  id: ObjectId;
  sku: string;
  name: string;
  description: string;
  price: number;
  image: string;
}
