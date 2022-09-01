import { module, test } from 'qunit';
import { setupRenderingTest } from 'speedrunners-tracker-frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | match-list-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MatchListItem />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <MatchListItem>
        template block text
      </MatchListItem>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
