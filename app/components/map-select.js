import Component from '@glimmer/component';
import { maps } from '../utils/maps';
import { action } from '@ember/object';

export default class MapSelectComponent extends Component {
  maps = maps;

  @action
  handleOnChange(e) {
    this.args?.onChange?.(e.target.value);
  }
}
