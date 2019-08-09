import Vue from 'vue';
Vue.filter('userLevel', val => {
  switch (val.toUpperCase()) {
    case 'USER':
      return '普通用户';
    case 'MEMBER':
      return '会员';
    case 'GOLD':
      return '金牌';
    case 'DIAMOND':
      return '钻石';
    case 'CROWN':
      return '皇冠';
    default:
      return '';
  }
});
