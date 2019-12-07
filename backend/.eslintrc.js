module.exports = {
    env: {
      browser: false,
      es6: true,
      "jest/globals": true
    },
    extends: [
      // turn this on for strict linting rules
      // 'airbnb-base',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'jest',
    ],
    rules: {
      "semi": 0,
    },
    overrides: [
      {
        files: [
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.spec.js",
          "**/*.spec.jsx"
        ],
        env: {
          "jest": true
        }
      }
    ]
  };