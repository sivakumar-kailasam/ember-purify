# Ember-purify
[![Travis CI Build Status](https://travis-ci.org/sivakumar-kailasam/ember-purify.svg?branch=master)](https://travis-ci.org/sivakumar-kailasam/ember-purify)
[![AppVeyor Build status](https://ci.appveyor.com/api/projects/status/h4kt3xi6axr4c3ep/branch/master?svg=true)](https://ci.appveyor.com/project/sivakumar-kailasam/ember-purify/branch/master)
[![Ember Observer Score](http://emberobserver.com/badges/ember-purify.svg)](http://emberobserver.com/addons/ember-purify)
![Ember Version][ember-version]

When you need to render user provided HTML content but don't want to trust the user content with Ember's ` Ember.String.htmlSafe` or `{{{  }}}`.
Uses [DOMPurify](https://github.com/cure53/DOMPurify/) to sanitize HTML & SVG. I strongly recommend you watch the video linked under the [inspiration](#inspiration) section. See XSS in action in Ember in [this twiddle](https://ember-twiddle.com/e41681e00585f3c94b461e349fee9ca1?fileTreeShown=false&numColumns=2&openFiles=templates.application.hbs%2Ccontrollers.application.js).

You can also run `ember serve` to see the above mentioned approaches along with the `purify-dom` helper. Inspect the DOM on all three broken images to see the difference.

## Installation
```shell
ember install ember-purify
```

## Usage 
```handlebars
{{purify-dom '<img src="missing-image.png" onerror=alert(1)//>'}}
```
will render
```html
<img src="missing-image.png">
```
Details on DOMPurify, the underlying library can be found in its [README](https://github.com/cure53/DOMPurify/blob/master/README.md)

## Configuration
To configure the purify helper globally in your app's `config/environment.js`,
```js
ENV.APP.purify = {
  // Refer to various config options in DOMPurify's README
};
```

## Inspiration
[Securing your EmberJS Application talk](https://www.websec.be/blog/emberjsmeetup-security/) By Philippe De Ryck.


## Installation

* `git clone <repository-url>` this repository
* `cd ember-purify`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

[ember-version]: https://embadge.io/v1/badge.svg?start=1.13.0
