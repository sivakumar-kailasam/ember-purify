import Ember from 'ember';

export default Ember.Controller.extend({
    htmlContent: '<img src="missing-image.png"  data-something="dangerous" onerror=console.log(1)//><b>Great</b>',

    safeStringContent: Ember.computed(function() {
        return Ember.String.htmlSafe('<img src="missing-image.png" onerror=console.log(2)//>');
    }),

    customConfig: {
        ALLOWED_TAGS: ['img']
    }
});