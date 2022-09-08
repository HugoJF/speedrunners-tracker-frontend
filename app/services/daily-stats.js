import { tracked } from '@glimmer/tracking';
import Service, { service } from '@ember/service';

export default class DailyStatsService extends Service {
  @tracked denerd_score = 0;
  @tracked chase_score = 0;
  @tracked loading = false;

  @service store;

  constructor(props) {
    super(props);

    this.refresh();
  }

  async refresh() {
    this.loading = true;

    const [date] = new Date().toISOString().split('T');
    const record = await this.store.findRecord('date', date);

    this.denerd_score = record.denerd_score;
    this.chase_score = record.chase_score;

    this.loading = false;
  }
}
