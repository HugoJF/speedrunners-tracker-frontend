import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service dailyStats;
  @service matchModal;

  @action
  async handleOnSaved() {
    await this.dailyStats.refresh();
  }

  @action
  handleModalOpen() {
    this.matchModal.open();
  }
}
