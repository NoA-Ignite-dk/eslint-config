require('./patch');

module.exports = {
	extends: [
		'./index.js',
		'./typescript.js',
		'./react.js',
		'plugin:@next/next/core-web-vitals',
	],
};
