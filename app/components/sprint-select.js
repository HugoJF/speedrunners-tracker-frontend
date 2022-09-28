import Component from '@glimmer/component';
import {service} from "@ember/service";

export default class SprintSelectComponent extends Component {
  sprints = [];

  @service store;

  constructor() {
    super(...arguments);

    this.fetchSprints();
  }

  async fetchSprints() {
    this.sprints = await this.store.findAll('sprint');
  }
}
