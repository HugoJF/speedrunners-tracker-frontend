import { helper } from '@ember/component/helper';

function join(args, { char = ' ' }) {
  return args.filter(Boolean).join(char);
}

export default helper(join);
