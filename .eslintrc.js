module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "standard",
        "plugin:flowtype/recommended"
    ],
    "plugins": [
        "standard",
        "promise",
        "flowtype"
    ],
    globals: [
      'jest'
    ],
    "rules": {
        "indent": [1, 4],
        "space-before-function-paren": [2, "never"],
        "keyword-spacing": [0]
    }
};