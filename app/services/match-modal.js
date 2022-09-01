import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MatchModalService extends Service {
  @tracked visible = false;
  @tracked model;

  @service store;

  open(model) {
    this.model = model ?? this.store.createRecord('match');
    this.visible = true;
  }

  close() {
    this.visible = false;
    this.model.rollbackAttributes();
  }

  async save() {
    await this.model.save();
  }
}
