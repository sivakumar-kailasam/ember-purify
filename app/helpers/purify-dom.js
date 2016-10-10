import Ember from 'ember';
import PurifyDOMHelper from 'ember-purify/helpers/purify-dom';
import config from '../config/environment';

const { getWithDefault } = Ember;

export default PurifyDOMHelper.extend({
  config: getWithDefault(config, 'APP.purify', {})
});
