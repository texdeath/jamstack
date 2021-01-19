module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/test/tsconfig.jest.json",
    },
  },
  // tsconfigのAliasを使用するため、jestのconfigにもルートを定義
  moduleNameMapper: {
    "^@/components/(.+)": "<rootDir>/src/components/$1",
    "^@/styles/(.+)": "<rootDir>/src/styles/$1",
    "^@/utils/(.+)": "<rootDir>/src/utils/$1",
    "^@/pages/(.+)": "<rootDir>/src/pages/$1",
  },
};
