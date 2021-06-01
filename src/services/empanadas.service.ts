import { EmpanadasRepository } from '../repositories/empanadas.repository';

export class EmpanadasService {
  private mongoDbRepository: EmpanadasRepository;
  constructor(mongoDbRepository: EmpanadasRepository) {}

  async getAll() {
    return this.mongoDbRepository.getAll();
  }
}
