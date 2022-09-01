import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  validateMap,
  validateScore,
  validateScores,
} from '../utils/validation';
import { service } from '@ember/service';
import { safeInvoke } from '../utils/functions';

export default class MatchFormComponent extends Component {
  @tracked errors = {};

  @service matchModal;

  constructor() {
    super(...arguments);

    this.matchModal.model.created_at = new Date().toISOString();
  }

  @action
  handleDenerdScore(denerd_score) {
    this.matchModal.model.denerd_score = denerd_score;
  }

  @action
  handleChaseScore(chase_score) {
    this.matchModal.model.chase_score = chase_score;
  }

  @action
  handleCreatedAtChange(e) {
    // Letter Z is added to the end of the date-string to avoid being parsed as a timezoned string
    this.matchModal.model.created_at = new Date(
      e.target.value + 'Z'
    ).toISOString();
  }

  @action
  handleMapSelection(map) {
    this.matchModal.model.map = map;
    console.log({map})
  }

  @action
  async handleSave() {
    if (!this.validate()) {
      return;
    }

    await this.matchModal.save();
    safeInvoke(this.args.onSaved, this.matchModal.model);
    this.matchModal.close();
  }

  @action
  async handleSaveAndContinue() {
    if (!this.validate()) {
      return;
    }

    await this.matchModal.save();
    safeInvoke(this.args.onSaved, this.matchModal.model);
  }

  @action
  closeModal() {
    this.matchModal.close();
  }

  validate() {
    // trigger re-render
    this.errors = {};

    const errors = {
      chase_score: validateScore(this.matchModal.model.chase_score),
      denerd_score: validateScore(this.matchModal.model.denerd_score),
      map: validateMap(this.matchModal.model.map),
      global: validateScores(
        this.matchModal.model.chase_score,
        this.matchModal.model.denerd_score
      ),
    };

    Object.entries(errors).forEach(([field, error]) => {
      if (error) {
        this.errors[field] = error.replace('{field}', field);
      }
    });

    return Object.values(errors).filter(Boolean).length === 0;
  }
}
