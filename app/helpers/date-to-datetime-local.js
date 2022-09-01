import { helper } from '@ember/component/helper';

const ISO_TO_LOCAL = /(.*T[0-9:]{5})/;

function dateToDatetimeLocal([date]) {
  const _date = date ?? new Date();
  const iso = _date.toISOString();
  const [, segment] = iso.match(ISO_TO_LOCAL);

  return segment;
}

export default helper(dateToDatetimeLocal);
