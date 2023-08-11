export default {
  moduleNameMapper: {
    '\\.(gif|ttf|eot|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    "^.+\\.svg$": "<rootDir>/test/__mocks__/svgTransform.js"
  },
  setupFilesAfterEnv: [
    "<rootDir>/test/setupTests.ts"
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
}
