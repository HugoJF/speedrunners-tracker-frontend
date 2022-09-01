import ENV from 'speedrunners-tracker-frontend/config/environment';
import RESTAdapter from '@ember-data/adapter/rest';

export default class MatchAdapter extends RESTAdapter {
  host = ENV.APP.API_HOSTNAME;

  urlForQuery(query) {
    if (query.map) {
      return [this.host, this.urlForMapQuery(query.map)].join('');
    }
    if (query.date) {
      return [this.host, this.urlForDateQuery(query.date)].join('');
    }
  }

  urlForMapQuery(map) {
    return `/matches/by-map/${map}`;
  }

  urlForDateQuery(date) {
    return `/matches/by-date/${date}`;
  }
}
