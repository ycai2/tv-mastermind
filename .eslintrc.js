module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    rules: {
      'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
      'import/prefer-default-export': 0,
      'no-unused-vars': [2, { args: 'none', "varsIgnorePattern": "^_$", }],
      'react/prop-types': [0],
    },
};
