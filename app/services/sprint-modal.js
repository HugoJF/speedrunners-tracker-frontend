import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SprintModalService extends Service {
  @tracked visible = false;
  @tracked model;

  @service store;
  @service currentSprint;

  open(model) {
    this.reset(model);
    this.visible = true;
  }

  close() {
    this.reset();
    this.model.rollbackAttributes();
    this.visible = false;
  }

  async save() {
    const sprint = await this.model.save();
    await this.currentSprint.refresh();

    return sprint;
  }

  async reset(model) {
    this.model = model ?? this.store.createRecord('sprint');
  }
}
