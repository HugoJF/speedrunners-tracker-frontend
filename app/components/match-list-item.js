import Component from '@glimmer/component';
import { formatDistance } from 'date-fns';

export default class MatchListItemComponent extends Component {
  get createdAtToHumans() {
    const createdAt = new Date(this.args.match.id);

    return formatDistance(createdAt, new Date(), { addSuffix: true });
  }
}
