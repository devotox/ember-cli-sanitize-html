import sanitizeHtml from 'dummy/utils/sanitize-html';
import { module, test } from 'qunit';

module('Unit | Utility | sanitize html');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = sanitizeHtml('<script></script>');
  assert.ok(result === '');
});
