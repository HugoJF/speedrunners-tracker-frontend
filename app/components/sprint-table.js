import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class SprintTableComponent extends Component {
  @service sprintModal;
  @service store;
  @service currentSprint;

  get currentId() {
    return this.currentSprint.current?.id;
  }

  get sprints() {
    return this.args.sprints?.filter((sprint) => !sprint.isNew);
  }

  @action
  async handleMakeCurrent(sprint) {
    await this.currentSprint.setCurrent(sprint);
  }

  @action
  handleEdit(sprint) {
    const sprintModel = this.store.peekRecord('sprint', sprint.id);

    this.sprintModal.open(sprintModel);
  }

  @action
  async handleDelete(sprint) {
    const model = this.store.peekRecord('sprint', sprint.id);

    await model.destroyRecord();
    // TODO?
  }
}
