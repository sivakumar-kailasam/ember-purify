/* eslint-env node */
'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-purify',

  // isDevelopingAddon: () => true,

  included: function() {
    this._super.included.apply(this, arguments);

    this.import('vendor/dom-purify/purify.min.js');
    this.import('vendor/shims/dom-purify.js');
  },

  treeForVendor(tree) {
    let domPurifyPath = path.dirname(require.resolve('dompurify'));

    let copiedTree = new Funnel(domPurifyPath, {
      destDir: 'dom-purify',
      files: ['purify.min.js', 'purify.min.js.map']
    });

    return mergeTrees([tree, copiedTree]);
  }

};
