(function() {
  function vendorModule() {
    'use strict';

    return self['DOMPurify'];
  }

  define('dom-purify', [], vendorModule);
})();
