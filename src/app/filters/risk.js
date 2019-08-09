import Vue from 'vue';

Vue.filter('risk', val => {
  switch (val) {
    case 'HIGH':
      return '高';
    case 'MIDDLE':
      return '中';
    case 'LOW':
      return '低';
    case 'NORMAL':
      return '与普通人相当';
    default:
      return '';
  }
});
