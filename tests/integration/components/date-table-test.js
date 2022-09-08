import { module, test } from 'qunit';
import { setupRenderingTest } from 'speedrunners-tracker-frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | date-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DateTable />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <DateTable>
        template block text
      </DateTable>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
