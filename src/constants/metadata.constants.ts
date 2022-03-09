import { ReflectionHelper } from '../helpers';
import { IGrpcMethodMetadata, IGrpcServiceMetadata } from '../interfaces';

export const GrpcServiceMetadata = new ReflectionHelper<IGrpcServiceMetadata>('grpc:service');
export const GrpcMethodMetadata = new ReflectionHelper<IGrpcMethodMetadata>('grpc:service:method');
