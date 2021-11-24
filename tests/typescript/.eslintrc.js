module.exports = {
	extends: [
		'../../typescript.js',
	],
	parserOptions: {
		project: require.resolve('./tsconfig.json'),
	},
};
