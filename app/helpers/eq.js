import { helper } from '@ember/component/helper';

function eq([a, b], { strict = true }) {
  if (strict) {
    return a === b;
  } else {
    return a == b;
  }
}

export default helper(eq);
