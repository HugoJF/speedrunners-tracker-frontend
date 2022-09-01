import Model, { attr } from '@ember-data/model';

export default class DateModel extends Model {
  @attr('string') date;
}
