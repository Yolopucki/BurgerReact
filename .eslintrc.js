module.exports = {
  "parser": "babel-eslint",
  env: {
    browser: true,
    es6: true,
    "jest": true
  },
  extends: [
    "airbnb",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    "react/prop-types": 0,
    "react/button-has-type ": 0,
    "react/jsx-filename-extension": [ 1, { "extensions": [ ".js", ".jsx" ] } ],
    "react/jsx-props-no-spreading": 0,
    "no-tabs": 0,
    "react/button-has-type": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "react/require-default-props": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/no-array-index-key": 0,
    "react/forbid-prop-types": 0,
    "react/state-in-constructor": 0,
    "no-unused-vars":0,
    "guard-for-in": 0,
    "no-shadow": 0,
    "arrow-parens": 0,
    "no-restricted-syntax": 0,
    "indent": ["error", "tab",{ "SwitchCase": 1}],
    "react/jsx-indent": [2, "tab"],
    "react/jsx-indent-props":[2, "tab"],
    "react/jsx-curly-spacing": [2, {"when": "always", "allowMultiline": false}],
    "no-mixed-spaces-and-tabs": [ "error", "smart-tabs" ],
    "quotes": [ 2, "double", "avoid-escape" ],
    "no-console": 0
  },
};

