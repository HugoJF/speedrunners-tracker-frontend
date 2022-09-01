import ENV from 'speedrunners-tracker-frontend/config/environment';
import RESTAdapter from '@ember-data/adapter/rest';

export default class DateAdapter extends RESTAdapter {
  // TODO improve (there is a method for the baseUrl)
  host = ENV.APP.API_HOSTNAME;
}
