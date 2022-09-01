import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MatchesDateShowRoute extends Route {
  @service store;

  model(params) {
    return this.store.query('match', {
      date: params.date,
    });
  }
}
