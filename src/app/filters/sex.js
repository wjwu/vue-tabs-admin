import Vue from 'vue';

Vue.filter('sex', val => {
  switch (val) {
    case 'WOMAN':
      return '女';
    case 'MAN':
      return '男';
    default:
      return '通用';
  }
});
