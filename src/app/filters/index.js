
import Vue from 'vue';

Vue.filter('userStatus', val => {
  return val ? '启用' : '禁用';
});