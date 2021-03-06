<!-- @format -->

# What this is

This is a ready to use template for creating modern frontend web applications.

# Getting started

1. Clone the repository.
2. `npm i`
3. `npm run start` -- to start development. This will open a browser.
4. `npm run build` -- to build for production. Your files would be at `builds/`.

# Dot Env

## Environment variables

Environment variables defined in `.env` file would be available as the `process.env` global object. You should prefix them with `APP_`, e.g., `APP_TEST_VAR="some value"`, which would be available via `process.env.APP_TEST_VAR`.

All env variables are being parse to their native data type. Example:

```
APP_BOOL="true"
APP_TEST_OBJ='{"test1":"value1","test2":"value2","test3":true,"test4":["hello",123,123.56]}'
APP_ARR='["hello",123,123.56]'
```

- `APP_BOOL` will be available as `process.env.APP_BOOL` which would be a `Boolean`.
- `APP_OBJ` will be available as `process.env.APP_TEST_OBJ` which would be an `Object`.
- `APP_ARR` will be available as `process.env.APP_ARR` which would be an `Array`.

All `process.env.APP_VAR` instances are being replaced, i.e.:

**input**: `console.log(process.env.APP_TEST_OBJ)`
**output**: `console.log({"test1":"value1","test2":"value2","test3":true,"test4":["hello",123,123.56]})`

## WEBSITE_NAME

Is being used for the title in your `index.html`.

## Development

`npm run start`

The entry file is `src/entry`.

You can also specify `PORT` and `HOST` in the `.env`. Example:

```
HOST="dev.domain.loc"
PORT="3000"
```

This is where your app would be accessible during development.

# Build

## Inlined with index.html

By default, the `main.css` is inline with `index.html`. Babel runtime is also split into a separate chunk that's also inlined.

## Scripts

The vendors script and the main script are split and are loaded via async. This improves loading performance on browsers.

# PWA

The template is PWA enabled by default. Service worker is powered by [workbox](https://github.com/GoogleChrome/workbox).

Dummy icons are available in `public/icons` (16x16, 24x24, 32x32, 64x64, 128x128, 256x256, 512x512).

Manifest file is also available at `public/manifest.json` which the `index.html` already links to.

# Code formatting

For code formatting the template is using [eslint](https://github.com/eslint/eslint) and [prettier](https://github.com/prettier/prettier).

#### NPM scripts

- To run eslint `npm run eslint`.
- To run prettier `npm run prettier`.
- To run both in the proper order `npm run lint`.

# Styling

Only `scss` is used for styling because as of the this writing, [`prettier` does not support `sass`](https://github.com/prettier/prettier/issues/4948).

# Code splitting

You can use [webpack's dynamic import](https://webpack.js.org/guides/code-splitting/#dynamic-imports) _BUT_ it does not work out of the box, you need a bridge like [inferno-async-component](https://github.com/aprilmintacpineda/inferno-async-component) to handle the component.

# Public files

Use the `public` folder on the root directory to store your public files. You can create folders there like `fonts/`, `css/`, `images/` if you have to.

Webpack is configured to save _all css files_ you used in your js files in the `css/` folder of your build, so to avoid having two folders with only css files in them, you can also create `css/` folder in the `public` directory. Those files would be copied in the `css/` directory of the build together with the other css files you may be using, like in [font-awesome](https://www.npmjs.com/package/font-awesome). For the fonts, save them in the `public/fonts/` directory. For `images` save them in the `public/images` directory. For js save them in the `public/js` directory. For svg files, save them in the `public/svgs` directory.

#### Serving built files

You can serve built files after running `npm run build` by running one of the following.

- `npm run serve:web`
- `npm run serve:native`

This feature is powered by [http-server](https://github.com/indexzero/http-server).
