module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**', '!**/node_modules/**', '!**/vendor/**'],
};
