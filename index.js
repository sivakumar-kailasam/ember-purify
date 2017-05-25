/* eslint-env node */
'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-purify',

  // isDevelopingAddon: () => true,

  included: function(app) {
    this._super.included.apply(this, arguments);

    this.import('vendor/dom-purify/purify.min.js');
    this.import('vendor/shims/dom-purify.js');
  },

  treeForVendor(tree) {
    let domPurifyPath = path.join(this.app.project.nodeModulesPath, 'dompurify/dist/');

    let copiedTree = new Funnel(domPurifyPath, {
      destDir: 'dom-purify',
      files: ['purify.min.js', 'purify.min.js.map']
    });

    return mergeTrees([tree, copiedTree]);
  }

};

