require('./patch');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'./react.js',
		'plugin:@next/next/core-web-vitals',
	],
	plugins: ['simple-import-sort', 'unused-imports'],
	rules: {
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					['^((?!((.*).(scss|css))|assets|src|./|../|@[^storybook|^sentry]))'],
					['^(@[^storybook|^sentry](.*))'],
					['^(@apps/|apps/|@libs/)'],
					['^(components/)'],
					['^(config/)'],
					['^(lib/)'],
					['^(pages/)'],
					['^(state/)'],
					['^(styles/)'],
					['^(translations/)'],
					['^(types/)'],
					['^(utils/)'],
					['^(assets/|(.*).(scss|css)$)'],
					['^((./|../))'],
				],
			},
		],
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				args: 'after-used',
				argsIgnorePattern: '^_',
				vars: 'all',
				varsIgnorePattern: '^_',
			},
		],
	},
};
