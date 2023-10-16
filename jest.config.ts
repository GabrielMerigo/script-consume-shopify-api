import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: true,
  transformIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'node'
};

export default config;
