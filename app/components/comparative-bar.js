import Component from '@glimmer/component';

export default class ComparativeBarComponent extends Component {
  get leftScore() {
    return +this.args.leftScore;
  }

  get rightScore() {
    return +this.args.rightScore;
  }

  get leftPercent() {
    return this.formatNumber(this.leftScore / this.total());
  }

  get rightPercent() {
    return this.formatNumber(this.rightScore / this.total());
  }

  formatNumber(number) {
    return (number * 100).toFixed(1);
  }

  total() {
    return +this.leftScore + +this.rightScore;
  }
}
