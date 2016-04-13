module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },

  "ecmaFeatures": {
    "modules": true,
    "jsx": true
  },

  "settings": {
    "ecmascript": 6,
    "jsx": true
  },

  "rules": {
    "indent": [1, 2, {"SwitchCase": 1}],
    "comma-dangle": 0,
    "strict": 0,
    "react/jsx-no-bind": 0,
    "max-len": 0,
    "prefer-template": 0,
    "no-unused-expressions": 0,
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "react/prefer-stateless-function": 0    
  },
  "plugins": [
    "react"
  ]
};
