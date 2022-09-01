import Controller from '@ember/controller';
import { filterBy } from '@ember/object/computed';

export default class MatchesDateShowController extends Controller {
  @filterBy('model', 'denerd_score', 3)
  denerdWins;

  @filterBy('model', 'chase_score', 3)
  chaseWins;

  get date() {
    return this.model.query.date;
  }
}
