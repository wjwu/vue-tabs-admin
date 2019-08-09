import Vue from 'vue';

Vue.filter('chMoney', val => {
  return `￥${val}`;
});
