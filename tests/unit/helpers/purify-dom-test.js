import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('purify-dom', {
    integration: true,
});

test('Removes malicious scripts', function(assert) {
    assert.expect(1);
    this.set('htmlContent', '<img src=x onerror=alert(1)//>');
    this.render(hbs `{{purify-dom htmlContent}}`);
    assert.deepEqual(this.$().html(), '<img src="x">');
});

test('Can handle empty html content', function(assert) {
    assert.expect(1);
    this.set('htmlContent', '');
    this.render(hbs `{{purify-dom htmlContent}}`);
    assert.notOk(Ember.$(this.$().html()).html());
});

test('Config can be overriden in the app', function(assert) {
    // Data attr is set to false in the dummy app
    assert.expect(1);
    this.set('htmlContent', '<a href="https://google.com" data-ref="google">Google</a>');
    this.set('customConfig', {
        ALLOW_DATA_ATTR: false,
        ALLOWED_TAGS: ['img']
    })
    this.render(hbs `{{purify-dom htmlContent config=customConfig}}`);
    assert.deepEqual(this.$().html(), 'Google');
});