require('./patch');

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'airbnb-typescript/base',
		'./index.js',
	],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': [
				'.ts',
				'.tsx',
			],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		indent: ['off'],
		'@typescript-eslint/indent': ['error', 'tab'],

		semi: ['off'],
		'@typescript-eslint/semi': ['error', 'always'],
		'@typescript-eslint/member-delimiter-style': ['error'],

		'no-unused-vars': ['off'],
		'@typescript-eslint/no-unused-vars': ['error', {
			vars: 'all',
			args: 'after-used',
			ignoreRestSiblings: true,
		}],

		'no-use-before-define': ['off'],
		'@typescript-eslint/no-use-before-define': ['error', {
			functions: false,
			classes: true,
			variables: true,
		}],

		'object-curly-spacing': ['off'],
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],

		'@typescript-eslint/explicit-function-return-type': ['off'],
		'@typescript-eslint/no-explicit-any': ['warn'],
		'@typescript-eslint/ban-ts-comment': ['error'],
		'@typescript-eslint/no-shadow': ['error'],
	},
};
