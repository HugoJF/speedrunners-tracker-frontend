import Route from '@ember/routing/route';
import { service } from '@ember/service';
import RSVP from 'rsvp';

export default class SprintsIndexRoute extends Route {
  @service currentSprint;

  async model(params) {
    await this.currentSprint.refresh();

    return this.currentSprint.current;
  }
}
