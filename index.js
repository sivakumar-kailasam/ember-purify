/* eslint-env node */
'use strict';
var path = require('path');


module.exports = {
  name: 'ember-purify',

  included: function(app) {
    this._super.included.apply(this, arguments);

    let domPurifyFile = path.join(this.app.project.nodeModulesPath, 'dompurify/src/purify.js');

    if (this.app.env === 'production') {
      domPurifyFile = path.join(this.app.project.nodeModulesPath, 'dompurify/dist/purify.min.js');
    }

    if (this.import) {
      this.import(domPurifyFile);
    } else {
      app.import(domPurifyFile);
    }
  }

};

