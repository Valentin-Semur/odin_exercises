module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "airbnb-base"
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "ignorePatterns": ["dist", ".eslintrc.js", "webpack.*"],
  "rules": {
    "indent": ["error", 4],
    "no-plusplus": "off",
  }
}