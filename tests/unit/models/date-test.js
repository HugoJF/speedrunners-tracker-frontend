import { module, test } from 'qunit';
import { setupTest } from 'speedrunners-tracker-frontend/tests/helpers';

module('Unit | Model | date', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('date', {});
    assert.ok(model);
  });
});
