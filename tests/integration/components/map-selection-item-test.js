import { module, test } from 'qunit';
import { setupRenderingTest } from 'speedrunners-tracker-frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | map-selection-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MapSelectionItem />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <MapSelectionItem>
        template block text
      </MapSelectionItem>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
