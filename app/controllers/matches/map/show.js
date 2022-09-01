import Controller from '@ember/controller';
import { maps } from '../../../utils/maps';
import { filterBy, sum } from '@ember/object/computed';

export default class MatchesMapShowController extends Controller {
  @filterBy('model', 'denerd_score', 3)
  denerdWins;

  @filterBy('model', 'chase_score', 3)
  chaseWins;

  get mapName() {
    const map = this.model.query.map;

    return maps[map];
  }
}
