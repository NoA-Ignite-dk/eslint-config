require('./patch');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'./react.js',
		'plugin:@next/next/core-web-vitals',
	],
};
