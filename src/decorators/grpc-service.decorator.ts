import { GrpcServiceMetadata } from '../constants/metadata.constants';
import { GrpcServiceDeclaration } from '../interfaces';
import { IGrpcServiceOptions } from '../interfaces';
import { GrpcServiceStorageStorage } from '../services/grpc-service-storage/grpc-service-storage.service';

export function GrpcService(options: IGrpcServiceOptions): ClassDecorator {
  return (target) => {
    if (!options) {
      options = { name: target.name };
    }
    GrpcServiceMetadata.set(options, target);
    GrpcServiceStorageStorage.set(target as unknown as GrpcServiceDeclaration);
  };
}
