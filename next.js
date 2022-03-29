require('./patch');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'./react.js',
		'plugin:@next/next/core-web-vitals',
	],
	plugins: ['unused-imports'],
	rules: {
		'import/no-extraneous-dependencies': ['off'],
		'padding-line-between-statements': [
			'warn',
			{
				blankLine: 'always',
				next: '*',
				prev: ['block', 'block-like', 'cjs-export', 'class', 'export', 'function', 'break'],
			},
			{
				blankLine: 'always',
				next: ['return'],
				prev: ['multiline-const', 'function', 'singleline-const'],
			},
			{
				blankLine: 'always',
				next: ['singleline-const'],
				prev: ['multiline-const', 'function'],
			},
			{
				blankLine: 'always',
				next: ['multiline-const', 'function'],
				prev: ['singleline-const'],
			},
			{
				blankLine: 'never',
				next: ['singleline-const'],
				prev: ['singleline-const'],
			},
			{
				blankLine: 'any',
				next: ['export', 'import'],
				prev: ['export', 'import'],
			},
			{
				blankLine: 'always',
				next: ['if'],
				prev: ['*'],
			},
		],
		'unused-imports/no-unused-imports': ['error'],
		'unused-imports/no-unused-vars': ['warn',
			{
				args: 'after-used',
				argsIgnorePattern: '^_',
				vars: 'all',
				varsIgnorePattern: '^_',
			},
		],
	},
};
