import { GrpcServiceDeclaration } from '../../interfaces';

class GrpcServiceStorageService {
  #grpcServices = new Set<GrpcServiceDeclaration>();

  getAll(): GrpcServiceDeclaration[] {
    return [...this.#grpcServices];
  }

  set(resolver: GrpcServiceDeclaration): void {
    this.#grpcServices.add(resolver);
  }

  clear(): void {
    this.#grpcServices.clear();
  }
}

export const GrpcServiceStorageStorage = new GrpcServiceStorageService();
