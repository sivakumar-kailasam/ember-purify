/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},
  afterInstall: function() {
    return this.addBowerPackageToProject('DOMPurify', '^0.8.3');
  }
};
