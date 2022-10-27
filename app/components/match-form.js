import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  validateMap,
  validateScore,
  validateScores,
  validateSprintId,
} from '../utils/validation';
import { service } from '@ember/service';

export default class MatchFormComponent extends Component {
  @tracked errors = {};

  @service matchModal;
  @service sprintModal;
  @service currentSprint;
  @service store;
  @service notifications;

  @action
  handleCreateNewSprint() {
    this.sprintModal.open();
  }

  @action
  handleSprintSelection(e) {
    this.matchModal.model.sprint_id = e.target.value;
  }

  @action
  handleP1Score(p1_score) {
    this.matchModal.model.p1_score = p1_score;
  }

  @action
  handleP2Score(p2_score) {
    this.matchModal.model.p2_score = p2_score;
  }

  @action
  handleMapSelection(map) {
    this.matchModal.model.map = map;
    console.log({ map });
  }

  @action
  async handleSave() {
    if (!this.validate()) {
      return;
    }
    const match = await this.matchModal.save();
    this.notifications.info(`Match ${match.id} created successfully!`)
    this.matchModal.close();
  }

  @action
  async handleSaveAndContinue() {
    if (!this.validate()) {
      return;
    }

    const match = await this.matchModal.save();
    this.notifications.info(`Match ${match.id} created successfully!`)
    this.args.onSaved?.(this.matchModal.model);
    this.matchModal.reset();
  }

  @action
  closeModal() {
    this.matchModal.close();
  }

  validate() {
    // trigger re-render
    this.errors = {};

    const errors = {
      p2_score: validateScore(this.matchModal.model.p2_score),
      p1_score: validateScore(this.matchModal.model.p1_score),
      map: validateMap(this.matchModal.model.map),
      sprint_id: validateSprintId(this.matchModal.model.sprint_id),
      global: validateScores(
        this.matchModal.model.p1_score,
        this.matchModal.model.p2_score
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
