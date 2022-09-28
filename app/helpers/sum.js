import { helper } from '@ember/component/helper';

function sum(a) {
  return a.reduce((acc, i) => acc + i);
}

export default helper(sum);
