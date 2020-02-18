import Helper from "@ember/component/helper";
import { isPresent } from "@ember/utils";
import { assign } from "@ember/polyfills";
import { htmlSafe } from "@ember/template";
import { inject as service } from "@ember/service";
import { sanitize } from "dompurify";
import { computed, getWithDefault } from "@ember/object";

export default Helper.extend({
  appConfig: service('config'),

  config: computed('appConfig.APP.{purify}', function() {
    return getWithDefault(this, 'appConfig.APP.purify', {});
  }),

  compute([text = ""], { config: localConfig, overrideConfig = false }) {
    let purifyConfig;

    if (isPresent(localConfig)) {
      if (overrideConfig) {
        purifyConfig = localConfig;
      } else {
        purifyConfig = assign(localConfig, this.config);
      }
    } else {
      purifyConfig = this.config;
    }

    return htmlSafe(sanitize(text, purifyConfig));
  }
});
