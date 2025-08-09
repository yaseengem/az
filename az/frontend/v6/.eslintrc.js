// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: 'expo',
  ignorePatterns: ['/dist/*'],
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['jest.setup.js', '**/*.test.{js,ts,tsx}', '**/__tests__/**/*.{js,ts,tsx}'],
      env: {
        jest: true,
      },
    },
  ],
};
