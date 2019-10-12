module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    'react-hooks'
  ],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [
    {
      "files": ["**/*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ],
  settings: {
    react: {
      version: "detect"
    }
  }
};