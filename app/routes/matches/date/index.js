import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MatchesDateIndexRoute extends Route {
  @service store;

  model() {
    // Don't cache anything as we don't know if it stil exists
    this.store.unloadAll('date');

    return this.store.findAll('date');
  }
}
