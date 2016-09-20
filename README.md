# vue-strap
Bootstrap components built with Vue.js.

This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS. As a result no dependency on jQuery or Bootstrap's JavaScript is required. The only required dependencies are:

* [Vue.js](http://vuejs.org/) (required ^v2.0.0-rc.6, test with v2.0.0-rc.6).
* [Bootstrap CSS](http://getbootstrap.com/) (required 3.x.x, test with 3.3.7). VueStrap doesn't depend on a very precise version of Bootstrap.

## Installation

### NPM

```bash
$ npm install 'mtorromeo/vue-strap#vue2'
```

### Single component
```js
// ES6 with webpack's vue-loader or browserify's vueify
import Alert from 'vue-strap/src/Alert.vue';
// or CommonJS
var alert = require('vue-strap/src/Alert.vue');

new Vue({
  components: {
    'alert': Alert
  }
})
```

### All components
```js
// ES6
import VueStrap from 'vue-strap';
// or CommonJS
var VueStrap = require('vue-strap');

Vue.use(VueStrap);
```

### Browser globals
The `dist` folder contains `vue-strap.js` and `vue-strap.min.js` with the plugin exported in the <code>window.VueStrap</code> object.

```html
<script src="path/to/vue.js"></script>
<script src="path/to/vue-strap.js"></script>
<script>
  Vue.use(VueStrap);

  var vm = new Vue({
      el: "#app",
      data: {
        showRight: false,
        showTop: false
      }
  })
</script>
```

## Docs
See the [documentation](http://mtorromeo.github.io/vue-strap/) with live editable examples.

## Local Setup
* Install with `npm install`
* Run the docs site in development mode with `npm run docs`. This will watch for file changes as you work.
* Build with `npm run build`.

## License
vue-strap is licensed under [The MIT License](LICENSE).
