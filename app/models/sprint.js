import Model, { attr } from '@ember-data/model';

export default class DateModel extends Model {
  @attr('string') id;

  @attr('number') goal;
  @attr('number') denerd_score;
  @attr('number') chase_score;

  @attr('created_at') created_at;
  @attr('updated_at') updated_at;
}
