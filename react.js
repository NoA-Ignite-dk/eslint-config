require('./patch');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	env: {
		browser: true,
		jest: true,
		node: true,
	},
	extends: ['./index.js'],
	overrides: [
		{
			extends: ['./typescript.js'],
			files: ['*.ts', '*.tsx'],
		},
	],
	plugins: ['react', 'react-hooks'],
	rules: {
		'react-hooks/exhaustive-deps': ['warn'],
		'react-hooks/rules-of-hooks': ['error'],
		'react/jsx-filename-extension': ['error', {
			extensions: ['.jsx', '.tsx'],
		}],
		'react/jsx-indent': ['error', 'tab', {
			checkAttributes: true,
			indentLogicalExpressions: true,
		}],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-props-no-spreading': ['off'],
		'react/prop-types': ['off'],
		'react/require-default-props': ['off'],
	},
};
