import { helper } from '@ember/component/helper';
import { formatDistance } from 'date-fns';

function dateToHumanReadable([input]) {
  const date = typeof input === 'string' ? new Date(input) : input;

  return formatDistance(date ?? new Date(), new Date(), { addSuffix: true });
}

export default helper(dateToHumanReadable);
