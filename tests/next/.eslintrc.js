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
	},
	parserOptions: {
		project: require.resolve('./tsconfig.eslint.json'),
	},
};
