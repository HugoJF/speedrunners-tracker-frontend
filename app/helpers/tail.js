import { helper } from '@ember/component/helper';

function tail([a, size = 8]) {
  if (typeof a !== 'string') {
    throw new Error('Argument is not a string');
  }

  return a.substring(a.length - size, a.length);
}

export default helper(tail);
