import globals from "globals";

export default [
  {
    rules: {
      "no-unused-vars": "error",
      "no-console": 0,
      "no-undef": "error",
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
