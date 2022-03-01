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
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				mjs: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/no-extraneous-dependencies': ['off'],
		'import/no-named-as-default': ['off'],
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					['^((?!((.*).(scss|css))|assets|src|./|../|@[^lingui|^storybook|^sentry]|^tailwind.config.js))'],
					['^(@[^lingui|^storybook|^sentry](.*))'],
					['^(apps/|libs/)'],
					['^(components/)'],
					['^(config/)'],
					['^(lib/)'],
					['^(pages/)'],
					['^(state/)'],
					['^(styles/)'],
					['^(translations/)'],
					['^(types/)'],
					['^(utils/)'],
					['^(tailwind.config.js|(.*).(scss|css)$)'],
					['^((./|../))'],
				],
			},
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'no-nested-ternary': 'warn',
		'no-multiple-empty-lines': [1, { max: 1 }],
		'padding-line-between-statements': [
			1,
			{
				blankLine: 'always',
				prev: ['block', 'block-like', 'cjs-export', 'class', 'export', 'function', 'break'],
				next: '*',
			},
			{
				blankLine: 'always',
				prev: ['multiline-const', 'function', 'singleline-const'],
				next: ['return'],
			},
			{
				blankLine: 'always',
				prev: ['multiline-const', 'function'],
				next: ['singleline-const'],
			},
			{
				blankLine: 'always',
				prev: ['singleline-const'],
				next: ['multiline-const', 'function'],
			},
			{
				blankLine: 'never',
				prev: ['singleline-const'],
				next: ['singleline-const'],
			},
			{
				blankLine: 'any',
				prev: ['export', 'import'],
				next: ['export', 'import'],
			},
		],
		'import/prefer-default-export': ['off'],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
			},
		],
		'max-len': [
			'error',
			{
				code: 140,
				ignoreComments: true,
			},
		],
		'no-console': ['warn'],
		'no-restricted-syntax': [
			'error',
			{
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
				selector: 'ForInStatement',
			},
			{
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
				selector: 'LabeledStatement',
			},
			{
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
				selector: 'WithStatement',
			},
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'no-underscore-dangle': ['off'],
		'no-unused-vars': ['warn'],
	},
};
