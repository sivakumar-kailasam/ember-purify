import Ember from 'ember';

const {
    isPresent,
    merge,
    Helper,
    String: { htmlSafe }
} = Ember;
const { sanitize } = DOMPurify;

export default Helper.extend({

    compute([text = ''], { config: localConfig, overrideConfig = false }) {
        let purifyConfig = this.get('config');

        if (isPresent(localConfig)) {
            if (overrideConfig) {
                purifyConfig = localConfig;
            } else {
                purifyConfig = merge(localConfig, purifyConfig);
            }
        }

        return htmlSafe(sanitize(text, purifyConfig));
    }

});