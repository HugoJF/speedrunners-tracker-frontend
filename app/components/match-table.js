import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class MatchTableComponent extends Component {
  @service matchModal;
  @service store;
  @service dailyStats;

  @action
  handleEdit(match) {
    const matchModel = this.store.peekRecord('match', match.id);

    this.matchModal.open(matchModel);
  }

  @action
  async handleDelete(match) {
    const model = this.store.peekRecord('match', match.id);

    await model.destroyRecord();
    await this.dailyStats.refresh();
  }

  toDate(datetime) {
    const iso = new Date(datetime).toISOString();
    const [date] = iso.split('T');

    return date;
  }
}
