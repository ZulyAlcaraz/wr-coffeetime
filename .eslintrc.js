module.exports = {
    parser: 'babel-eslint',

    extends: [
      'airbnb',
      'plugin:css-modules/recommended',
    ],

    plugins: [
      'css-modules',
    ],

    globals: {
      __DEV__: true,
    },

    env: {
      browser: true,
    },

    rules: {
      // `js` and `jsx` are common extensions
      // `mjs` is for `universal-router` only, for now
      'import/extensions': [
        'error',
        'always',
        {
          js: 'never',
          jsx: 'never',
          mjs: 'never',
        },
      ],

      // Not supporting nested package.json yet
      // https://github.com/benmosher/eslint-plugin-import/issues/458
      'import/no-extraneous-dependencies': 'off',

      // Recommend not to leave any console.log in your code
      // Use console.error, console.warn and console.info instead
      'no-console': [
        'error',
        {
          allow: ['warn', 'error', 'info'],
        },
      ],

      // Allow js files to use jsx syntax, too
      'react/jsx-filename-extension': 'off',

      // https://github.com/kriasoft/react-starter-kit/pull/961
      // You can reopen this if you still want this rule
      'react/prefer-stateless-function': 'off',
    },
  };
