import Model, { attr } from '@ember-data/model';

export default class SprintModel extends Model {
  @attr('string', { defaultValue: new Date().toISOString() }) name;
  @attr('number', { defaultValue: 5 }) goal;
  @attr('string') p1_name;
  @attr('number', { defaultValue: 0 }) p1_score;
  @attr('string') p2_name;
  @attr('number', { defaultValue: 0 }) p2_score;

  @attr('string', { defaultValue: new Date().toISOString() }) created_at;
  @attr('string', { defaultValue: new Date().toISOString() }) updated_at;
}
