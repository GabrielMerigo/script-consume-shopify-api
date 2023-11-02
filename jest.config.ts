import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/test/**/*.spec.ts'],
  moduleNameMapper: {
    '@constants': ['<rootDir>/src/constants'],
    '@data': ['<rootDir>/src/data'],
    '@env': ['<rootDir>/src/env'],
    '@mocks/(.*)$': ['<rootDir>/src/mocks/$1'],
    '@requests/(.*)$': ['<rootDir>/src/requests/$1'],
    '@services/(.*)$': ['<rootDir>/src/services/$1'],
    '@types': ['<rootDir>/src/types'],
    '@utils': ['<rootDir>/src/utils']
  }
};

export default config;
