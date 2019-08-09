import Vue from 'vue';

Vue.filter('payType', val => {
  switch (val) {
    case 'ALIPAY':
      return '支付宝';
    case 'WECHAT':
      return '微信';
    case 'BANK':
      return '银行卡';
    case 'BALANCE':
      return '余额';
    default:
      return '';
  }
});
