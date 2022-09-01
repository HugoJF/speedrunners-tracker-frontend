import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class MatchesDateIndexController extends Controller {
  @service router;

  @action
  handleDateSelection(date) {
    this.router.transitionTo('matches.date.show', date);
  }
}
