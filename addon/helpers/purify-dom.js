import Ember from 'ember';

const { Helper, String: { htmlSafe } } = Ember;
const { sanitize } = DOMPurify;

export default Helper.extend({

  compute([ text=''  ]/*, hash*/) {
    const purifyConfig = this.get('config');
    return htmlSafe(sanitize(text, purifyConfig));
  }

});
