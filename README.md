# Peque gRPC

[![CI](https://github.com/pequehq/grpc/actions/workflows/ci.yml/badge.svg)](https://github.com/pequehq/grpc/actions/workflows/ci.yml)
![coverage](https://raw.githubusercontent.com/pequehq/grpc/main/coverage-badge.svg)

Peque gRPC allows you to code your [gRPC](https://grpc.io/) server and client following an
[OOP](https://en.wikipedia.org/wiki/Object-oriented_programming)/[AOP](https://en.wikipedia.org/wiki/Aspect-oriented_programming)
flavor to better fit enterprise-level paradigms and patterns.

## Install

```shell
npm install @pequehq/grpc reflect-metadata
```

**Note**: tsconfig's `compilerOptions` must have both `experimentalDecorators` and `emitDecoratorMetadata` set to **true**.
