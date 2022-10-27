import ENV from 'speedrunners-tracker-frontend/config/environment';
import RESTAdapter from '@ember-data/adapter/rest';

export default class MatchAdapter extends RESTAdapter {
  host = ENV.APP.API_HOSTNAME;
}
