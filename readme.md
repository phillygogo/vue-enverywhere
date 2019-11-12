# Enverywhere v1.0.4

This package can be utilised to extract specific environment variables at runtime.

Another option for this package is to pull the version from your package.json which is useful for versioning your service worker.

## Installation

Using yarn:

``` bash
$ yarn add vue-enverywhere
```

In VueJs:

Import the package

``` Javascript
//in vue.confg.js
const vueEnverywere = require('vue-enverywhere');

module.exports = {
  configureWebpack: {
    ...
    plugins: [
      new vueEnverywere({ filename: 'env-vars.js' })
    ],
  },
}
```

### Utilizing the `env-vars` file

This snippet is from service worker but this file can be imported anywhere in your app

``` Javascript
importScripts('./env-vars.js')

const inDevelopment = ENVERYWHERE_DEVELOPMENT
```

#### example env

``` .env-example
VUE_APP_API_URL="http://localhost:8080"
VUE_APP_BASE_URL="******"
VUE_APP_ROUTER_MODE="hash"
ENVERYWHERE_DEVELOPMENT="false"
ENVERYWHERE_BASE_PREFIX="/example.api."
```

#### example env-vars.js

``` Javascript
const ENVERYWHERE_DEVELOPMENT = 'false'
const ENVERYWHERE_BASE_PREFIX = '/example.api.'
const VERSION = '1.0.1'
```

##### Note

*Only env variables prefixed with `ENVERYWHERE_` will be exported.*

##### Note2

*Version is imported from the package.json version number, if you have no version in your package.json it wont import. I can alter the package to have this as an option in the future.*

## Running

``` bash
$ yarn build
```

## Issues

Please post a bug report or issue on GitHub.
