require('./patch');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['./index.js'],
	overrides: [
		{
			extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'airbnb-typescript/base'],
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			plugins: ['@typescript-eslint'],
			rules: {
				'@typescript-eslint/ban-ts-comment': ['error'],
				'@typescript-eslint/ban-types': 'off',
				'@typescript-eslint/explicit-function-return-type': ['off'],
				'@typescript-eslint/indent': 'off',
				'@typescript-eslint/lines-between-class-members': ['error', 'always', {
					exceptAfterSingleLine: true,
				}],
				'@typescript-eslint/member-delimiter-style': ['error'],
				'@typescript-eslint/no-explicit-any': ['warn'],
				'@typescript-eslint/no-shadow': ['error'],
				'@typescript-eslint/no-unused-vars': ['warn', {
					args: 'after-used',
					ignoreRestSiblings: true,
					vars: 'all',
				}],
				'@typescript-eslint/no-use-before-define': 'off',
				'@typescript-eslint/object-curly-spacing': ['error', 'always'],
				'@typescript-eslint/semi': ['error', 'always'],
				indent: ['off'],
				'lines-between-class-members': ['off'],
				'no-shadow': ['off'],
				'no-unused-vars': ['off'],
				'no-use-before-define': ['off'],
				'object-curly-spacing': ['off'],
				quotes: ['off'],
				semi: ['off'],
			},
			settings: {
				'import/parsers': {
					'@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
				},
				'import/resolver': {
					node: {
						extensions: ['.js', '.jsx', '.ts', '.tsx'],
					},
					typescript: {
						alwaysTryTypes: true,
					},
				},
			},
		},
	],
};
