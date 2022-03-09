import 'reflect-metadata';

import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import { GrpcServiceStorageStorage } from './grpc-service-storage.service';

const test = suite('GrpcServiceStorageStorage');

test.before.each(() => {
  class GrpcServiceOne {}
  class GrpcServiceTwo {}

  GrpcServiceStorageStorage.set(GrpcServiceOne);
  GrpcServiceStorageStorage.set(GrpcServiceTwo);
  GrpcServiceStorageStorage.set(GrpcServiceTwo);
});

test.after.each(() => {
  GrpcServiceStorageStorage.clear();
});

test('should get all the resolvers', () => {
  assert.is(GrpcServiceStorageStorage.getAll().length, 2);
});

test('should clear the resolvers', () => {
  assert.is(GrpcServiceStorageStorage.getAll().length, 2);

  GrpcServiceStorageStorage.clear();

  assert.is(GrpcServiceStorageStorage.getAll().length, 0);
});

test.run();
