require('./patch');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'./typescript',
	],
	plugins: ['@nrwl/nx'],
	rules: {
		'@nrwl/nx/enforce-module-boundaries': ['error'],
	},
};
