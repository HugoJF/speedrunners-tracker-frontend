import RESTSerializer from '@ember-data/serializer/rest';

export default class DateSerializer extends RESTSerializer {
  primaryKey = 'date';
}
