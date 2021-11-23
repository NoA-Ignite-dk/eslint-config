# @jdpnielsen/eslint-config

Provides the extensible base eslint configuration for javascript projects.

#### Usage

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@jdpnielsen/eslint-config"]
}
```

### @jdpnielsen/eslint-config/react

Use this configuration alongside the base configuration if your project uses React. It extends `eslint-config-airbnb`.

#### Usage

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@jdpnielsen/eslint-config/react"]
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

## Development

Install all necessary development dependencies by running `npm install --dev`
