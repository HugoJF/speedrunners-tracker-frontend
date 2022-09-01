import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MapSelectionItemComponent extends Component {
  baseClasses = 'px-4 py-4 border rounded cursor-pointer';

  get classes() {
    return [this.baseClasses, this.args.class].join(' ');
  }

  @action
  handleOnClick() {
    if (this.args.onClick) {
      this.args.onClick(this.args.map);
    }
  }
}
