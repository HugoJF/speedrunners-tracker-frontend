import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MatchesMapShowRoute extends Route {
  @service store;

  model(params) {
    return this.store.query('match', {
      map: params.map,
    });
  }
}
