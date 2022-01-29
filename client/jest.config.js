module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  modulePaths: ['src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)+(test).(js|ts)?(x)'],
  setupFilesAfterEnv: ['<rootDir>/setup-test.ts'],
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
}
