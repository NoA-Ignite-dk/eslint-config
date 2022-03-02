require('./patch');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'./react.js',
		'plugin:@next/next/core-web-vitals',
	],
	plugins: ['unused-imports'],
	rules: {
		'import/no-extraneous-dependencies': 'off',
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
