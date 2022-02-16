require('./patch');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'./index.js',
		'./typescript.js',
		'./react.js',
		'plugin:@next/next/core-web-vitals',
	],
};
