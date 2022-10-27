import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class SprintsIndexController extends Controller {
  @service router;

  get sortedSprints() {
    return this.model.sortBy('created_at').reverse();
  }
}
