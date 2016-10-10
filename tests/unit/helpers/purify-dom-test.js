import { purifyDom } from 'dummy/helpers/purify-dom';
import { module, test } from 'qunit';

module('Unit | Helper | purify dom');

test('Removes malicious scripts', function(assert) {
  let { string: result } = purifyDom(['<img src=x onerror=alert(1)//>']);
  assert.deepEqual(result, '<img src="x">');
});

test('Can handle empty html content', function(assert) {
  let { string: result } = purifyDom([]);
  assert.deepEqual(result, '');
});
