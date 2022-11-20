import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SprintSelectComponent extends Component {
  @tracked
  sprints = [];

  @service store;

  constructor() {
    super(...arguments);

    this.fetchSprints();
  }

  get savedSprints() {
    return this.sprints.filter((sprint) => !sprint.isNew);
  }

  @action
  handleOnChange(e) {
    this.args.onChange?.(e.target.value);
  }

  async fetchSprints() {
    this.sprints = await this.store.findAll('sprint');
  }
}
