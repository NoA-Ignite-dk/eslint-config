# @noaignite-dk/eslint-config

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Provides extensible base eslint configuration. There are 3 variants;

- [JavaScript](#NoA-Ignite-dkeslint-config-1)
- [TypeScript](#NoA-Ignite-dkeslint-configtypescript)
- [React + TypeScript](#NoA-Ignite-dkeslint-configreact)
- [Nextjs](#NoA-Ignite-dkeslint-confignext)

## Installation

`npm install @noaignite-dk/eslint-config --save-dev`

or

`yarn add @noaignite-dk/eslint-config --dev`

### @noaignite-dk/eslint-config

Use this configuration alongside the base configuration if your project uses JavaScript.

#### Usage

In your project's [.eslintrc.js](https://eslint.org/docs/user-guide/configuring), add the following:

```js
module.exports = {
	extends: ['@noaignite-dk/eslint-config'],
};
```

### @noaignite-dk/eslint-config/typescript

Use this configuration alongside the base configuration if your project uses TypeScript.

#### Usage

In your project's [.eslintrc.js](https://eslint.org/docs/user-guide/configuring), add the following:

```js
module.exports = {
  extends: ['@noaignite-dk/eslint-config/typescript'],
};
```

### @noaignite-dk/eslint-config/react

Use this configuration alongside the base configuration if your project uses React.

#### Usage

In your project's [.eslintrc.js](https://eslint.org/docs/user-guide/configuring), add the following:

```js
module.exports = {
  extends: ['@noaignite-dk/eslint-config/react'],
};
```

### @noaignite-dk/eslint-config/next

Use this configuration alongside the base configuration if your project uses Typescript + Next.js.

#### Usage

In your project's [.eslintrc.js](https://eslint.org/docs/user-guide/configuring), add the following:

```js
module.exports = {
  extends: ['@noaignite-dk/eslint-config/next'],
};
```

## Development

Install all necessary development dependencies by running `npm install --dev`
