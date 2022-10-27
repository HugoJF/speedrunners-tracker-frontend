import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service matchModal;
  @service sprintModal;
  @service currentSprint;
  @service router;

  @tracked test = 'start';

  @action
  handleModalOpen() {
    this.matchModal.open();
  }
}
