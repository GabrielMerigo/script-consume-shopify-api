import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: true,
  transformIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  moduleNameMapper: {
    '@constants': ['../src/constants/index'],
    '@data': ['../../src/data/index'],
    '@env': ['../../src/env/index'],
    '@mocks': ['../../src/mocks/index'],
    '@requests/*': ['../../src/requests/*'],
    '@services/*': ['../../src/services/*'],
    '@types': ['../../src/types/index'],
    '@utils': ['../../src/utils/index']
  }
};

export default config;
