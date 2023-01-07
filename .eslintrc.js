module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'consistent-return': 0,
    'import/extensions': 0,
    'import/no-cycle': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        usePrettierrc: true,
        fileInfoOptions: {
          withNodeModules: true
        }
      }
    ],
    'no-console': ['error', { allow: ['error', 'warn'] }],
    'no-case-declarations': 0,
    'no-restricted-exports': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'no-underscore-dangle': 0,
    'no-restricted-syntax': 0,
    'no-useless-escape': 0,
    'no-plusplus': 0,
    'no-script-url': 0,
    'react/no-danger': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-unstable-nested-components': 0,
    'react/no-unknown-property': 0,
    'react/prop-types': [1, { ignore: ['children'] }],
    'react/jsx-filename-extension': [
      0,
      {
        extensions: ['.ts', '.tsx']
      }
    ],
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/return-await': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-inferrable-types': 0
  }
}
