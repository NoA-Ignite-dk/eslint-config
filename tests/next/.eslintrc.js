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
	overrides: [
		{
			files: ['*.js', '.*.js'],
			env: {
				node: true,
			},
			rules: {
				'@typescript-eslint/no-var-requires': ['off'],
			},
		},
	],
};
