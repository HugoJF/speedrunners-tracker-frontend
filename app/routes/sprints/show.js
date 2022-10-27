import Route from '@ember/routing/route';
import { service } from '@ember/service';
import RSVP from 'rsvp';

export default class SprintsIndexRoute extends Route {
  @service store;

  model(params) {
    return RSVP.hash({
      sprint: this.store.findRecord('sprint', params.sprint),
      matches: this.store.query('match', {
        sprint: params.sprint,
      }),
    });
  }
}
