interface IGrpcServiceOptions {
  name: string;
}

type IGrpcServiceMetadata = IGrpcServiceOptions;

interface IGrpcMethodOptions {
  name: string;
}

type IGrpcMethodMetadata = IGrpcMethodOptions;

export type { IGrpcServiceOptions, IGrpcServiceMetadata, IGrpcMethodOptions, IGrpcMethodMetadata };
