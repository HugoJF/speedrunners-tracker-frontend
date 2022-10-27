import Controller from '@ember/controller';

export default class MatchesIndexController extends Controller {
  get sortedMatches() {
    return this.model
      .filter((match) => !match.isNew)
      .sortBy('created_at')
      .reverse();
  }
}
