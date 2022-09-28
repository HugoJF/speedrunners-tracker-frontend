import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MatchesIndexRoute extends Route {
  @service store;

  model() {
    // TODO
    // return this.store.findAll('match');
  }
}
