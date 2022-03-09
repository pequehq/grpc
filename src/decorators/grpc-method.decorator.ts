import { GrpcMethodMetadata } from '../constants/metadata.constants';
import { IGrpcMethodOptions } from '../interfaces';

export function GrpcMethod(options: IGrpcMethodOptions): MethodDecorator {
  return (target, propertyKey) => {
    if (!options) {
      options = { name: propertyKey.toString() };
    }
    GrpcMethodMetadata.set(options, target.constructor);
  };
}
