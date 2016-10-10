import Ember from 'ember';

export default Ember.Controller.extend({
  htmlContent: '<img src="missing-image.png" onerror=alert(1)//>',

  safeStringContent: Ember.computed(function() {
    return Ember.String.htmlSafe('<img src="missing-image.png" onerror=alert(2)//>');
  }),
});
