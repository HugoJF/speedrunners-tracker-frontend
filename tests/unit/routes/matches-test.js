import { module, test } from 'qunit';
import { setupTest } from 'speedrunners-tracker-frontend/tests/helpers';

module('Unit | Route | matches', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:matches');
    assert.ok(route);
  });
});
