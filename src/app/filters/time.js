import Vue from 'vue';
import format from 'date-fns/format';

Vue.filter('timeFormatter', val => {
  if (!Number(val)) {
    return '';
  }
  val = Number(val);
  const result = format(val, 'YYYY-MM-DD HH:mm:ss');
  if (result.toString() === 'Invalid date') {
    return '';
  }
  return result;
});

Vue.filter('timeShortFormatter', val => {
  return format(val, 'YYYY-MM-DD');
});
