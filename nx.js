const workspaceRules = require('@nrwl/eslint-plugin-nx/src/resolve-workspace-rules');
const { RULE_NAME, default: enforceModuleBoundaries } = require('@nrwl/eslint-plugin-nx/src/rules/enforce-module-boundaries');

require('./patch');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'plugin:@next/next/core-web-vitals',
		'./next.js',
	],
	rules: {
		[RULE_NAME]: enforceModuleBoundaries,
		...workspaceRules,
	},
};
