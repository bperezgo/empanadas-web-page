import { EmpanadasModel } from '../models/empanadas.model';
import { Repository } from '../lib/repository';

export class EmpanadasRepository extends Repository<EmpanadasModel> {
  constructor() {
    super('empanadas');
  }

  async getAll(): Promise<EmpanadasModel[]> {
    return this.find();
  }
}
