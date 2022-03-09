# Peque gRPC

Peque GraphQL allows you to code your gRPC server and client following an
[OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) / [AOP](https://en.wikipedia.org/wiki/Aspect-oriented_programming)
flavor to better fit enterprise-level paradigms and patterns.

## Install

```shell
npm install @pequehq/grpc reflect-metadata
```

**Note**: tsconfig's `compilerOptions` must have both `experimentalDecorators` and `emitDecoratorMetadata` set to **true**.
