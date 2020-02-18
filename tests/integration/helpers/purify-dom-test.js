import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import Ember from "ember";

module('Integration | Helper | purify-dom', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(() => Ember.onerror = () => {});

  const imgUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/icon-tomster.png';

  test("Removes malicious scripts", async function(assert) {
    this.set(
      "htmlContent",
      `<img src="${imgUrl}" onload=alert(1)//>`
    );

    await render(hbs`{{purify-dom this.htmlContent}}`);

     assert.deepEqual(
       this.element.innerHTML,
       `<img src="${imgUrl}">`,
       "removes malicious onerror callback"
     );
  });

  test("Can handle empty html content", async function(assert) {
    await render(hbs`{{purify-dom ""}}`);

    assert.equal(this.element.innerText, '', 'Nothing is rendered')
  });

  test("Config can be overridden in the app", async function(assert) {
    // Data attr is set to false in the dummy app
    this.set(
      "htmlContent",
      '<a href="https://google.com" data-ref="google">Google</a>'
    );

    this.set("customConfig", {
      ALLOW_DATA_ATTR: false,
      ALLOWED_TAGS: ["img"]
    });

    await render(hbs`{{purify-dom this.htmlContent config=this.customConfig}}`);

    assert.dom().hasText('Google');
  });
});
