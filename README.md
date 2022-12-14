# Nano ID

Yet another implementation of [Nano ID](https://github.com/ai/nanoid).

## Install

In the same directory as your `package.json` file, create or edit a `.npmrc` file to include the following line:

```text
@beppler:registry=https://npm.pkg.github.com
```

You need also to authenticate on Github packages with a [personal access token](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token).

After this you can install the package using npm using the following command:

```bash
npm install --save "@beppler/nanoid"
```

## Usage

The easiest way to use nanoid is the following:

```js
const nanoid = require('@beppler/nanoid');

console.log(nanoid()); // 0zQ6UHikdVsVMTt4c0V4F
```

The length of the response can be specified as the first argument:

```js
const nanoid = require('@beppler/nanoid');

console.log(nanoid(32)); // Q507q6VfCz-1dl9Czi7m5Ydp3GluV8W5
```
