require('./patch');

module.exports = {
	extends: ['eslint:recommended',],
	plugins: ['import'],
	'parserOptions': {
		'ecmaVersion': 12,
	},
	rules: {
		semi: ['error', 'always'],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'max-len': ['error', {
			code: 140,
			ignoreComments: true
		}],
		'no-tabs': ['error', {
			allowIndentationTabs: true
		}],
		'no-console': ['warn'],
		'no-unused-vars': ['warn'],
		'no-nested-ternary': ['warn'],
		'keyword-spacing': ["error"],
		'space-before-function-paren': ['error', {
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always',
		}],
		'brace-style': ['error', '1tbs', {
			"allowSingleLine": true
		}],
		'import/extensions': ['error', 'ignorePackages',{
			js: 'never',
			mjs: 'never',
			jsx: 'never',
			ts: 'never',
			tsx: 'never',
		}],
		'import/prefer-default-export': ['error'],
		'import/no-named-as-default': ['error'],
		'import/order': ['error', {
			'newlines-between': 'always',
			groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
			alphabetize: { order: 'desc' },
		},
		],
	},
};
