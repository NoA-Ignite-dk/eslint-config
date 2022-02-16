/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: [
		'../../next.js',
	],
	settings: {
		next: {
			rootDir: 'tests/next/',
		},
		'import/resolver': {
			typescript: {
				project: require.resolve('./tsconfig.eslint.json'),
			},
		},
	},
	parserOptions: {
		project: require.resolve('./tsconfig.eslint.json'),
	},
};
