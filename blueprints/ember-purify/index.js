/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},
  afterinstall: function(options) {
    return this.addBowerPackageToProject('DOMPurify', '^0.8.3');
  }
};
