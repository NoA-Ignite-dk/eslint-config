# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.4.1](https://github.com/NoA-Ignite-dk/eslint-config/compare/v1.4.0...v1.4.1) (2022-03-02)


### Build System

* ensure linting fails on warnings ([c1ef6d0](https://github.com/NoA-Ignite-dk/eslint-config/commit/c1ef6d0df270c971a6bd14cd588c2dfb3a53d22e))

## [1.4.0](https://github.com/NoA-Ignite-dk/eslint-config/compare/v1.3.0...v1.4.0) (2022-03-02)


### Features

* remove npm-check ([27f1627](https://github.com/NoA-Ignite-dk/eslint-config/commit/27f16272fd15f945be193307881afddbffd37f77))


### Rules

* **js:** added new fixable rules ([fa0601c](https://github.com/NoA-Ignite-dk/eslint-config/commit/fa0601c843c1c216ceff01ebd27863cf6d54757a))
* **js:** max-len - Added ignore pattern for SVG d property ([291a7c7](https://github.com/NoA-Ignite-dk/eslint-config/commit/291a7c723d1f57915d8fee58bcdf62bcd3ad745b))
* **next:** added simple sorting ([ba24b9a](https://github.com/NoA-Ignite-dk/eslint-config/commit/ba24b9a38972d6b1b5577b0cced2c80961ccd131))
* **next:** deleted eslint-plugin-simple-import-sort ([a35cf95](https://github.com/NoA-Ignite-dk/eslint-config/commit/a35cf9551869f967f64d6d22e8c5f52d1731df5f))
* **next:** disabled import-rules as we're using simple-import-sort insteead ([4753850](https://github.com/NoA-Ignite-dk/eslint-config/commit/475385036d6162d43484dbf5e1f5b0e9d37bc2b1))


### Build System

* add deps scope ([4e2671c](https://github.com/NoA-Ignite-dk/eslint-config/commit/4e2671c5abb5343b0e07be6e7f0ebc814b237732))
* **deps:** add renovate.json ([0e0a2ac](https://github.com/NoA-Ignite-dk/eslint-config/commit/0e0a2ac666e55f67fd52af2c0f22b53ff99408bd))
* **deps:** bump next from 12.0.10 to 12.1.0 ([55dd698](https://github.com/NoA-Ignite-dk/eslint-config/commit/55dd698ecc9c2220bd700198f93e92281bfe238d))
* **deps:** pin dependencies ([5dde93a](https://github.com/NoA-Ignite-dk/eslint-config/commit/5dde93ac05c09bbad472524c0ec9491e9a513979))
* update dependencies ([cf11cb2](https://github.com/NoA-Ignite-dk/eslint-config/commit/cf11cb2fac9d24ece4bd6838b275dc4ef3db4ddc))


### Fixes

* **deps:** update test deps ([d9c2762](https://github.com/NoA-Ignite-dk/eslint-config/commit/d9c276267671f322e88931b7cfdb477f255d5298))

## [1.3.0](https://github.com/NoA-Ignite-dk/eslint-config/compare/v1.3.0-beta.2...v1.3.0) (2022-03-01)


### Documentation

* fix link anchors ([0b3479d](https://github.com/NoA-Ignite-dk/eslint-config/commit/0b3479d5d811ff71d85fbf9d0984b9f087714874))

## [1.3.0-beta.2](https://github.com/NoA-Ignite-dk/eslint-config/compare/v1.3.0-beta.1...v1.3.0-beta.2) (2022-02-16)


### Rules

* **js:** disable no-underscore-dangle rule ([847184a](https://github.com/NoA-Ignite-dk/eslint-config/commit/847184af90b53b33b0ec811ed4765cc49991e2e7))

## [1.3.0-beta.1](https://github.com/NoA-Ignite-dk/eslint-config/compare/v1.3.0-beta.0...v1.3.0-beta.1) (2022-02-16)


### Fixes

* **ts:** add plugin for resolving tsconfig path alias ([dee36e9](https://github.com/NoA-Ignite-dk/eslint-config/commit/dee36e9f9fffbb0b1d6663c9c8b1489a1b52288a))


### Documentation

* **next:** resolve path alias in next.js monorepo example ([1983f4d](https://github.com/NoA-Ignite-dk/eslint-config/commit/1983f4d77e8ecdd0f5abda61eb7843d51c3a6466))
* **ts:** add common errors section ([0c09709](https://github.com/NoA-Ignite-dk/eslint-config/commit/0c09709e241b70621479748391ccacf4f47cfc25))


### Rules

* **js:** add additional groups to import/order rule ([de0001b](https://github.com/NoA-Ignite-dk/eslint-config/commit/de0001bd87343613ebe6f5b996406eedc48ff751))

## [1.3.0-beta.0](https://github.com/NoA-Ignite-dk/eslint-config/compare/v1.2.0...v1.3.0-beta.0) (2022-02-16)


### Features

* **next:** implement eslint config for Next.js ([e5ddb7b](https://github.com/NoA-Ignite-dk/eslint-config/commit/e5ddb7b57479b288a75b1ac693e281b5d0646609)), closes [#9](https://github.com/NoA-Ignite-dk/eslint-config/issues/9)
* use eslint override to leave js rules untouched ([edeccaf](https://github.com/NoA-Ignite-dk/eslint-config/commit/edeccaf48831879caf2bace5ffd8ba83c0df4b32))


### Rules

* **react:** configure react/jsx-indent to use tabs ([2e1f390](https://github.com/NoA-Ignite-dk/eslint-config/commit/2e1f3905fe3ac8aeebbc472d6230ff1c9f4faa75))
* **react:** configure react/jsx-indent-props to use tabs ([a4984e1](https://github.com/NoA-Ignite-dk/eslint-config/commit/a4984e135166895b5aa1b5399eb31e02854186c7))


### Documentation

* add documentation of tsconfig.eslint.json usage ([0208fc3](https://github.com/NoA-Ignite-dk/eslint-config/commit/0208fc3880d9a89d207c050afba6c491bd001c16))
* use .eslintrc.js in readme instead of .eslintrc ([960392f](https://github.com/NoA-Ignite-dk/eslint-config/commit/960392faef47681aaf975d3ac59fb3b30f953a18))
* use type import for eslint configs ([a89acb0](https://github.com/NoA-Ignite-dk/eslint-config/commit/a89acb0507403b0b3cc8c1dd4f6bd0587563e028))


### Build System

* remove 'meta' scope ([6b8575f](https://github.com/NoA-Ignite-dk/eslint-config/commit/6b8575ffb5ec03d23b451a9c01b09d51c9baedf8))

## [1.2.0](https://github.com/NoA-Ignite-dk/eslint-config/compare/v1.1.1...v1.2.0) (2022-02-09)


### Rules

* **js:** disable consistent-return rule ([0847763](https://github.com/NoA-Ignite-dk/eslint-config/commit/08477634c3ec8a4e8a4edb109a2d02f524771a83)), closes [/github.com/NoA-Ignite-dk/eslint-config/discussions/7#discussioncomment-2125158](https://github.com/NoA-Ignite-dk//github.com/NoA-Ignite-dk/eslint-config/discussions/7/issues/discussioncomment-2125158)

### [1.1.1](https://github.com/NoA-Ignite-dk/eslint-config/compare/v1.1.0...v1.1.1) (2022-02-09)


### Build System

* update dependencies ([aff6af3](https://github.com/NoA-Ignite-dk/eslint-config/commit/aff6af3b115fa124f21ac6aacb4cb97ae972afec))


### Fixes

* **ts:** base quote rule should be disabled for typescript ([1aa3fcc](https://github.com/NoA-Ignite-dk/eslint-config/commit/1aa3fcceb11324b1b5b6decc9b8c0996291d9cfd))

## [1.1.0](https://github.com/NoA-Ignite-dk/eslint-config/compare/v1.0.2...v1.1.0) (2022-02-09)


### Documentation

* updated README.md ([3124cf4](https://github.com/NoA-Ignite-dk/eslint-config/commit/3124cf44a825bec9d574de39d06729d3fe4ebda5))


### Build System

* added commitlint with husky pre-commit hook ([04e2774](https://github.com/NoA-Ignite-dk/eslint-config/commit/04e2774fee873b1d8d8635e28db4d7a99239e6c9))


### Rules

* **js:** alphebetize import/order ascending rule ([3863447](https://github.com/NoA-Ignite-dk/eslint-config/commit/3863447a25ab34215e9fc6af0b3e50a2a03cc552))
* **ts:** add typescript compatible no-shadow rule ([b6038e1](https://github.com/NoA-Ignite-dk/eslint-config/commit/b6038e15cfc4bd3cb1ac50b000e71d51fec75b91))
* **ts:** enable exceptAfterSingleLine option in lines-between-class-members rule ([8ec3af5](https://github.com/NoA-Ignite-dk/eslint-config/commit/8ec3af552fbafeb1add57efdcae1e5b38f468331))
* **ts:** disable import/prefer-default-export rule ([ea15e45](https://github.com/NoA-Ignite-dk/eslint-config/commit/ea15e45c487022a42ee33e36f0ad86114ab709fb))
* **js:** disable arrow-body-style rule ([fbc8e64](https://github.com/NoA-Ignite-dk/eslint-config/commit/fbc8e64bc5340923da987ae451d61af0226774d1))

### [1.0.2](https://github.com/NoA-Ignite-dk/eslint-config/compare/v1.0.1...v1.0.2) (2021-12-16)

### [1.0.1](https://github.com/noaignite/eslint-config/compare/v1.0.0...v1.0.1) (2021-12-16)

## 1.0.0 (2021-12-16)
