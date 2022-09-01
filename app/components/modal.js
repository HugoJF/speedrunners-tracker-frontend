import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ModalComponent extends Component {
  @action
  handleClick() {
    if (typeof this.args.onClose === 'function') {
      this.args.onClose();
    }
  }
}
