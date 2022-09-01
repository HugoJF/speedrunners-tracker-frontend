import { module, test } from 'qunit';
import { setupTest } from 'speedrunners-tracker-frontend/tests/helpers';

module('Unit | Adapter | date', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:date');
    assert.ok(adapter);
  });
});
