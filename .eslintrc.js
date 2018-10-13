module.exports = {
    "env": {
        "browser": true
    },
    "parserOptions": {
        "ecmaVersion": 6
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": ["error", 2],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-unused-vars": ["off"],
        "no-undef": ["off"],
        "block-spacing": ["error", "always"],
        "brace-style": [
          "error",
          "stroustrup",
          { "allowSingleLine": true }
        ],
        "comma-dangle": ["error", "never"],
        "func-call-spacing": ["error", "never"],
        "no-trailing-spaces": ["error"],
        "space-before-function-paren": ["error", "never"],
        "space-before-blocks": ["error", "always"],
        "space-infix-ops": ["error"],
        "comma-spacing": ["error"],
        "key-spacing": ["error"],
        "keyword-spacing": ["error"],
        "no-console": ["warn"],
        "wrap-iife": ["error", "outside"],
        "new-parens": ["error"],
         "spaced-comment": ["error", "always"]
    }
};
