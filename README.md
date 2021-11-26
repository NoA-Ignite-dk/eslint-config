# @jdpnielsen/eslint-config

Provides extensible base eslint configuration. There are 3 variants;

- [Javascript](#jdpnielseneslint-config-1)
- [Typescript](#jdpnielseneslint-configtypescript)
- [React + Typescript](#jdpnielseneslint-configreact)

## Installation

`npm install @jdpnielsen/eslint-config`

or

`yarn add @jdpnielsen/eslint-config`

### @jdpnielsen/eslint-config

Use this configuration alongside the base configuration if your project uses Typescript.

#### Usage

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@jdpnielsen/eslint-config"]
}
```

### @jdpnielsen/eslint-config/typescript

Use this configuration alongside the base configuration if your project uses Typescript.

#### Usage

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@jdpnielsen/eslint-config/typescript"]
}
```

### @jdpnielsen/eslint-config/react

Use this configuration alongside the base configuration if your project uses React.

#### Usage

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@jdpnielsen/eslint-config/react"]
}
```

## Development

Install all necessary development dependencies by running `npm install --dev`
