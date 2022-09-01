import Model, { attr } from '@ember-data/model';

export default class MatchModel extends Model {
  @attr('number', { defaultValue: 0 }) denerd_score;
  @attr('number', { defaultValue: 0 }) chase_score;
  @attr('string') map;
  @attr('string', { defaultValue: new Date().toISOString() }) created_at;
}
