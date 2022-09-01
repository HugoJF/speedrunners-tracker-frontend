import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { safeInvoke } from '../utils/functions';

export default class ScoreInputComponent extends Component {
  buttons = [0, 1, 2, 3];

  @tracked score = 0;

  @action
  handleOnClick(value) {
    safeInvoke(this.args.onChange, value);
  }
}
