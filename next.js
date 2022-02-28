require('./patch');

module.exports = {
	env: {
		browser: true,
		jest: true,
		node: true,
	},
	extends: ['next', './react.js'],
};
