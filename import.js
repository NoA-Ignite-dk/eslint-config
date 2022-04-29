/* eslint-disable max-len */
require('./patch');

module.exports = {
	plugins: ['import'],
	rules: {
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
	},
};
