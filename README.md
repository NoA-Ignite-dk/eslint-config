# @noaignite-dk/eslint-config

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Provides extensible base eslint configuration. There are 3 variants;

- [Javascript](#NoA-Ignite-dkeslint-config-1)
- [Typescript](#NoA-Ignite-dkeslint-configtypescript)
- [React + Typescript](#NoA-Ignite-dkeslint-configreact)

## Installation

`npm install @noaignite-dk/eslint-config`

or

`yarn add @noaignite-dk/eslint-config`

### @noaignite-dk/eslint-config

Use this configuration alongside the base configuration if your project uses Typescript.

#### Usage

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@noaignite-dk/eslint-config"]
}
```

### @noaignite-dk/eslint-config/typescript

Use this configuration alongside the base configuration if your project uses Typescript.

#### Usage

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@noaignite-dk/eslint-config/typescript"]
}
```

### @noaignite-dk/eslint-config/react

Use this configuration alongside the base configuration if your project uses React.

#### Usage

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@noaignite-dk/eslint-config/react"]
}
```

## Development

Install all necessary development dependencies by running `npm install --dev`
