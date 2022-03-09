interface Type<T = any> extends Function {
  new (...args: any[]): T;
}

type ClassDeclaration = Type;

type GrpcServiceDeclaration = ClassDeclaration;

export type { ClassDeclaration, GrpcServiceDeclaration };
