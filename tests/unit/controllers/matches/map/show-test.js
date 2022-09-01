import { module, test } from 'qunit';
import { setupTest } from 'speedrunners-tracker-frontend/tests/helpers';

module('Unit | Controller | matches/map/show', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:matches/map/show');
    assert.ok(controller);
  });
});
