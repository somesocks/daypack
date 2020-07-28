module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: require.resolve('./tsconfig.json'),
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
	],
	extends: [
		'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
  rules: {
    'prefer-const': ['warn'],
    'prefer-rest-params': ['warn'],

    '@typescript-eslint/camelcase': ['warn'],
    '@typescript-eslint/type-annotation-spacing': ['warn'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'comma',
          'requireLast': true,
        },
        'singleline': {
          'delimiter': 'comma',
          'requireLast': false,
        },
      },
    ],
  },
};
