import { PersistenceType } from './PersistenceType';
import InMemoryRequestRepository from './inmemory/InMemoryRequestRepositoryAdapter';
import MongoDbRequestRepository from './mongodb/MongoDbRequestRepositoryAdapter';

class RequestRepositoryFactory {
  static create(type, logger) {
    switch (type) {
      case PersistenceType.InMemory:
        return new InMemoryRequestRepository();
      case PersistenceType.MongoDb:
        return new MongoDbRequestRepository(logger);
      default:
        throw new Error('Invalid peristence type');
    }
  }
}

export default RequestRepositoryFactory;
