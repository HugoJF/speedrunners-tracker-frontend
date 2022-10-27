import Model, { attr } from '@ember-data/model';

export default class MatchModel extends Model {
  @attr('string') sprint_id;

  @attr('string') map;
  @attr('number', { defaultValue: 0 }) p1_score;
  @attr('number', { defaultValue: 0 }) p2_score;

  @attr('string') created_at;
  @attr('string') updated_at;
}
