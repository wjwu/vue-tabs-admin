import Vue from 'vue';

Vue.filter('sampleType', val => {
  switch (val) {
    case 'SALIVA':
      return '唾液';
    case 'FAECES':
      return '粪便';
    case 'BLOOD':
      return '血液';
    default:
      return '';
  }
});
