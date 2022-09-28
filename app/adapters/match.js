import ENV from 'speedrunners-tracker-frontend/config/environment';
import RESTAdapter from '@ember-data/adapter/rest';

export default class MatchAdapter extends RESTAdapter {
  host = ENV.APP.API_HOSTNAME;

  urlForQuery(query) {
    if (query.map) {
      return [this.host, this.urlForMapQuery(query.map)].join('');
    }
    if (query.sprint) {
      return [this.host, this.urlForSprintQuery(query.sprint)].join('');
    }
  }

  urlForMapQuery(map) {
    return `/matches/by-map/${map}`;
  }

  urlForSprintQuery(sprint) {
    return `/matches/by-sprint/${sprint}`;
  }
}
