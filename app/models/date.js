import Model, { attr } from '@ember-data/model';

export default class DateModel extends Model {
  @attr('string') date;
  @attr('number') denerd_score;
  @attr('number') chase_score;
}
