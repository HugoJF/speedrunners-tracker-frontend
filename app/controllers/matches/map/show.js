import Controller from '@ember/controller';
import { maps } from '../../../utils/maps';
import { filterBy } from '@ember/object/computed';

export default class MatchesMapShowController extends Controller {
  @filterBy('model', 'p1_score', 3)
  p1Wins;

  @filterBy('model', 'p2_score', 3)
  p2Wins;

  get mapName() {
    const map = this.model.query.map;

    return maps[map];
  }
}
