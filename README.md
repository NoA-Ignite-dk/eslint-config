# @noaignite-dk/eslint-config

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Provides extensible base eslint configuration. There are 4 variants;

- [JavaScript](#noaignite-dkeslint-config-1)
- [TypeScript](#noaignite-dkeslint-configtypescript)
- [React + TypeScript](#noaignite-dkeslint-configreact)
- [Next.js](#noaignite-dkeslint-confignext)
- [Import](#noaignite-dkeslint-configimport)
- [NX](#noaignite-dkeslint-confignx)

## Installation

`npm install @noaignite-dk/eslint-config --save-dev`

or

`yarn add @noaignite-dk/eslint-config --dev`

### @noaignite-dk/eslint-config

Use this configuration if your project uses JavaScript.

#### Usage

In your project's [.eslintrc.js](https://eslint.org/docs/user-guide/configuring), add the following:

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['@noaignite-dk/eslint-config'],
};
```

### @noaignite-dk/eslint-config/typescript

Use this configuration if your project uses TypeScript.

#### Usage

Create an eslint specific tsconfig file (`tsconfig.eslint.json`) with the following contents:

```json
{
	"extends": "./tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": false,
	},
	"include": [
		"**/*.ts",
		"**/*.tsx",
		"**/*.js",
		"**/.*.js",
	],
	"exclude": ["node_modules"]
}
```

Then, in your project's [.eslintrc.js](https://eslint.org/docs/user-guide/configuring), add the following:

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['@noaignite-dk/eslint-config/typescript'],
	parserOptions: {
		project: require.resolve('./tsconfig.eslint.json'),
	},
};
```

### @noaignite-dk/eslint-config/react

Use this configuration if your project uses React + Typescript.

#### Usage

Create an eslint specific tsconfig file (`tsconfig.eslint.json`) with the following contents:

```json
{
	"extends": "./tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": false,
	},
	"include": [
		"**/*.ts",
		"**/*.tsx",
		"**/*.js",
		"**/.*.js",
	],
	"exclude": ["node_modules"]
}
```

Then, in your project's [.eslintrc.js](https://eslint.org/docs/user-guide/configuring), add the following:

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['@noaignite-dk/eslint-config/react'],
	parserOptions: {
		project: require.resolve('./tsconfig.eslint.json'),
	},
};
```

### @noaignite-dk/eslint-config/next

Use this configuration if your project uses Next.js + Typescript.

#### Usage

Create an eslint specific tsconfig file (`tsconfig.eslint.json`) with the following contents:

```json
{
	"extends": "./tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": false,
	},
	"include": [
		"next-env.d.ts",
		"**/*.ts",
		"**/*.tsx",
		"**/*.js",
		"**/.*.js",
	],
	"exclude": ["node_modules"]
}
```

Then, in your project's [.eslintrc.js](https://eslint.org/docs/user-guide/configuring), add the following:

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['@noaignite-dk/eslint-config/next'],
	parserOptions: {
		project: require.resolve('./tsconfig.eslint.json'),
	},
};
```

If Next.js isn't installed in your root directory (such as a monorepo) [rootDir](https://nextjs.org/docs/basic-features/eslint#rootdir) must be configured in `.eslintrc.js`:

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['@noaignite-dk/eslint-config/next'],
	settings: {
		next: {
			rootDir: "packages/my-app/"
		},
		'import/resolver': {
			typescript: {
				project: require.resolve('./tsconfig.eslint.json'),
			},
		},
	},
	parserOptions: {
		project: require.resolve('./tsconfig.eslint.json'),
	},
};
```

### @noaignite-dk/eslint-config/import

Use this configuration to add sorting for your project.

#### Usage

Create an eslint specific tsconfig file (`tsconfig.eslint.json`) with the following contents:

```json
{
	"extends": "./tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": false,
	},
	"include": [
		"**/*.ts",
		"**/*.tsx",
		"**/*.js",
		"**/.*.js",
	],
	"exclude": ["node_modules"]
}
```

Then, in your project's [.eslintrc.js](https://eslint.org/docs/user-guide/configuring), add the following:

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['@noaignite-dk/eslint-config/import'],
};
```

### @noaignite-dk/eslint-config/nx

Use this configuration if your project uses nx.

#### Usage

Create an eslint specific tsconfig file (`tsconfig.eslint.json`) with the following contents:

```json
{
	"extends": "./tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": false,
	},
	"include": [
		"**/*.ts",
		"**/*.tsx",
		"**/*.js",
		"**/.*.js",
	],
	"exclude": ["node_modules"]
}
```

Then, in your project's [.eslintrc.js](https://eslint.org/docs/user-guide/configuring), add the following:

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['@noaignite-dk/eslint-config/nx'],
	parserOptions: {
		project: require.resolve('./tsconfig.eslint.json'),
	},
	rules: {
		"@nrwl/nx/enforce-module-boundaries": [
			"error",
			{
				enforceBuildableLibDependency: true,
				allow: ["libs", "apps"],
				depConstraints: [
					{
						sourceTag: "*",
						onlyDependOnLibsWithTags: ["*"]
					}
				]
			}
		]
	}
};
```

## Common errors

### 1. Unable to resolve path to module '@alias/file'. eslint(import/no-unresolved)

This error typically occurs when `eslint-import-resolver-typescript` cannot resolve the correct `tsconfig.json` or a `baseUrl` is missing.

**Resolutions**:
1. Make sure a [baseUrl](https://www.typescriptlang.org/tsconfig#baseUrl) is set:

(`tsconfig.eslint.json`)
```json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

2. Try explicitly passing the tsconfig to the resolver:

(`.eslintrc.js`)
```js
module.exports = {
	// [...]
	settings: {
		'import/resolver': {
			typescript: {
				project: require.resolve('./tsconfig.eslint.json'),
			},
		},
	},
	parserOptions: {
		project: require.resolve('./tsconfig.eslint.json'),
	},
};
```

## Development

Install all necessary development dependencies by running `npm install --dev`
