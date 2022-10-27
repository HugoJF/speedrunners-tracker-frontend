import ENV from 'speedrunners-tracker-frontend/config/environment';
import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';

const HOST = ENV.APP.API_HOSTNAME;

export default class CurrentSprintService extends Service {
  @tracked current;

  @service store;

  async refresh() {
    const sprint = await this._fetchCurrent();

    if (!sprint) {
      return;
    }

    this._repeek(sprint.id);

    if (!this.sprint) {
      this.store.pushPayload('sprint', { sprint });
    }

    this._repeek(sprint.id);
  }

  async setCurrent(sprint) {
    await axios.post(`${HOST}/sprints/current`, { sprint: { id: sprint.id } });

    this._repeek(sprint.id);
  }

  _repeek(id) {
    this.current = this.store.peekRecord('sprint', id);
  }

  async _fetchCurrent() {
    const url = `${HOST}/sprints/current`;

    const request = await axios.get(url);

    return request.data.current;
  }
}
