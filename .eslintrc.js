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
    "rules": {
        "indent": [1, 4],
        "space-before-function-paren": [2, "never"],
        "keyword-spacing": [0]
    }
};