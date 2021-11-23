require('./patch');

module.exports = {
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	plugins: [
		'react',
		'react-hooks',
	],
	extends: [
		'./index.js',
		'./typescript.js',
	],
	rules: {
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.jsx', '.tsx'],
			},
		],
		'react/jsx-props-no-spreading': ['off'],
		'react/prop-types': ['off'],
		'react/require-default-props': ['off'],
		'react-hooks/rules-of-hooks': ['error'],
		'react-hooks/exhaustive-deps': ['warn'],
	},
};
