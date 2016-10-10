/*jshint node:true*/
module.exports = {
  name: 'ember-purify',

  afterinstall: function(options) {
    this.addBowerPackageToProject('DOMPurify', '^0.8.3');
  }
};
