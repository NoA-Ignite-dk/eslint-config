/* eslint-disable max-len */
require('./patch');

module.exports = {
	extends: ['airbnb-base'],
	parserOptions: {
		ecmaVersion: 12,
	},
	plugins: ['import'],
	rules: {
		'arrow-body-style': ['off'],
		'consistent-return': ['off'],
		'import/extensions': ['error', 'ignorePackages', {
			js: 'never',
			jsx: 'never',
			mjs: 'never',
			ts: 'never',
			tsx: 'never',
		}],
		'import/no-extraneous-dependencies': ['off'],
		'import/no-named-as-default': ['off'],
		'import/order': ['error', {
			alphabetize: {
				order: 'asc',
			},
			groups: [
				'builtin',
				'external',
				'type',
				'internal',
				'parent',
				'sibling',
				'index',
				'object',
			],
			'newlines-between': 'always',
		}],
		'import/prefer-default-export': ['off'],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'lines-between-class-members': ['error', 'always', {
			exceptAfterSingleLine: true,
		}],
		'max-len': ['error', {
			code: 140,
			ignoreComments: true,
			// SVG d properties
			ignorePattern: 'd="([\\s\\S]*?)"',
		}],
		'no-console': ['warn'],
		'no-multiple-empty-lines': ['warn', {
			max: 3,
		}],
		'no-nested-ternary': 'warn',
		'no-restricted-syntax': ['error', {
			message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			selector: 'ForInStatement',
		}, {
			message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			selector: 'LabeledStatement',
		}, {
			message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			selector: 'WithStatement',
		}],
		'no-tabs': ['error', {
			allowIndentationTabs: true,
		}],
		'no-underscore-dangle': ['off'],
		'no-unused-vars': ['warn'],
		'padding-line-between-statements': ['warn',
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
		],
		'space-before-function-paren': ['error',
			{
				anonymous: 'never',
				asyncArrow: 'always',
				named: 'never',
			},
		],
	},
};
