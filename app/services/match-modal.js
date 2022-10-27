import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MatchModalService extends Service {
  @tracked visible = false;
  @tracked model;

  @service store;
  @service currentSprint;

  open(model) {
    this.visible = true;
    this.reset(model);
  }

  close() {
    this.visible = false;
    this.model.rollbackAttributes();
    this.reset();
  }

  async save() {
    return await this.model.save();
  }

  async reset(model) {
    this.model = model ?? this.store.createRecord('match');

    await this.currentSprint.refresh();

    const current = this.currentSprint.current;
    if (current) {
      this.model.sprint_id = current.id;
    }
  }
}
