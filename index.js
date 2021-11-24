/* eslint-disable max-len */
require('./patch');

module.exports = {
	extends: ['airbnb-base'],
	plugins: ['import'],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'max-len': ['error', {
			code: 140,
			ignoreComments: true,
		}],
		'no-tabs': ['error', {
			allowIndentationTabs: true,
		}],
		'no-console': ['warn'],
		'no-unused-vars': ['warn'],
		'import/extensions': ['error', 'ignorePackages', {
			js: 'never',
			mjs: 'never',
			jsx: 'never',
			ts: 'never',
			tsx: 'never',
		}],
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
		'import/no-named-as-default': ['off'],
		'import/no-extraneous-dependencies': ['off'],
		'import/prefer-default-export': ['error'],
		'import/order': ['error', {
			'newlines-between': 'always',
			groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
			alphabetize: { order: 'desc' },
		}],
	},
};
