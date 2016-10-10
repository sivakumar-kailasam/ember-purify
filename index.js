/* eslint node: true */
'use strict';
var path = require('path');


module.exports = {
  name: 'ember-purify',

  included: function included(app) {
    var domPurifyScript = 'DOMPurify/src/purify.js';
    if (app.env === 'production') {
      domPurifyScript = 'DOMPurify/dist/purify.min.js';
    }
    app.import(path.join(app.bowerDirectory, domPurifyScript));
  }

};
