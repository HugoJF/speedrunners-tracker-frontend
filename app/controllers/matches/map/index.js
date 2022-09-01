import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class MatchesMapIndexController extends Controller {
  @service store;
  @service dailyStats;
  @service router;

  @action
  handleMapSelection(map) {
    this.router.transitionTo('matches.map.show', map);
  }
}
