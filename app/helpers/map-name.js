import { helper } from '@ember/component/helper';
import { maps } from '../utils/maps';

function mapName([input]) {
  return maps[input];
}

export default helper(mapName);
