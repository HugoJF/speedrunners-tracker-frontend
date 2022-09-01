import { action } from '@ember/object';
import Component from '@glimmer/component';
import { safeInvoke } from '../utils/functions';

export default class MapSelectionComponent extends Component {
  @action
  handleDateSelection(selection) {
    safeInvoke(this.args.onSelection, selection);
  }
}
