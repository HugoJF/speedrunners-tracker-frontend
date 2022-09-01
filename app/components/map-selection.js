import {action} from '@ember/object';
import Component from '@glimmer/component';
import {maps} from '../utils/maps';

export default class MapSelectionComponent extends Component {
  get mapKeys() {
    return Object.keys(maps).sort();
  }

  mapName(mapKey) {
    return maps[mapKey];
  }

  @action
  handleMapSelection(selection) {
    if (typeof this.args.onSelection === 'function') {
      this.args.onSelection(selection);
    }
  }
}
