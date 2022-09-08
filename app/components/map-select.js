import Component from '@glimmer/component';
import { maps } from '../utils/maps';
import { action } from '@ember/object';
import { safeInvoke } from '../utils/functions';

export default class MapSelectComponent extends Component {
  maps = maps;

  @action
  handleOnChange(e) {
    safeInvoke(this.args.onChange, e.target.value);
  }
}
