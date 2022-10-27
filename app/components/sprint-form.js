import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  validateGoal,
  validatePlayerName,
  validateSprintName,
} from '../utils/validation';
import { service } from '@ember/service';

export default class MatchFormComponent extends Component {
  @tracked errors = {};

  @service sprintModal;
  @service notifications;

  @action
  handleNameChange(e) {
    this.sprintModal.model.name = e.target.value;
  }

  @action
  handleP1NameChange(e) {
    this.sprintModal.model.p1_name = e.target.value;
  }

  @action
  handleP2NameChange(e) {
    this.sprintModal.model.p2_name = e.target.value;
  }

  @action
  handleGoalChange(e) {
    this.sprintModal.model.goal = e.target.value;
  }

  @action
  async handleSave() {
    if (!this.validate()) {
      return;
    }
    const sprint = await this.sprintModal.save();
    this.notifications.info(`Sprint ${sprint.id} created successfully!`);
    this.sprintModal.close();
  }

  @action
  closeModal() {
    this.sprintModal.close();
  }

  validate() {
    // trigger re-render
    this.errors = {};

    const errors = {
      name: validateSprintName(this.sprintModal.model.name),
      p1_name: validatePlayerName(this.sprintModal.model.p1_name),
      p2_name: validatePlayerName(this.sprintModal.model.p2_name),
      goal: validateGoal(this.sprintModal.model.goal),
    };

    Object.entries(errors).forEach(([field, error]) => {
      if (error) {
        this.errors[field] = error.replace('{field}', field);
      }
    });

    return Object.values(errors).filter(Boolean).length === 0;
  }
}
