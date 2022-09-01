import {tracked} from '@glimmer/tracking';
import Service, {service} from '@ember/service';

export default class DailyStatsService extends Service {
  @tracked denerd_score = undefined;
  @tracked chase_score = undefined;
  @tracked loading = false;

  @service store;

  constructor(props) {
    super(props);
    this.refresh();
  }

  async refresh() {
    this.loading = true;

    const now = new Date();
    const [date] = now.toISOString().split('T');
    const matches = await this.store.query('match', {date});

    this.denerd_score = matches
      .map((match) => match.denerd_score > match.chase_score)
      .filter(Boolean).length;
    this.chase_score = matches.length - this.denerd_score;
    this.loading = false;
  }
}
