import Ember from 'ember';

export function purifyDom([ text=''  ]/*, hash*/) {
  return Ember.String.htmlSafe(DOMPurify.sanitize(text));
}

export default Ember.Helper.helper(purifyDom);
