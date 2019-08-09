import Vue from 'vue';

Vue.filter('orderStatus', val => {
  switch (val) {
    case 'UNPAY':
      return '未支付';
    case 'PAIED':
      return '待发货';
    case 'WAIT_RECEIVE':
      return '已发货/等到收货';
    case 'RECEIVED':
      return '已收货';
    case 'CLOSE':
      return '关闭';
    case 'DONE':
      return '完成';
    default:
      return '';
  }
});

Vue.filter('couponsStatus', val => {
  switch (val) {
    case 'UNPAY':
      return '未支付';
    case 'WAIT_SERVICE':
      return '待使用';
    case 'CLOSE':
      return '已关闭';
    case 'DONE':
      return '已完成';
    default:
      return '';
  }
});

Vue.filter('geneOrderStatus', val => {
  switch (val) {
    case 'WAIT_DELIVERED':
      return '待发货';
    case 'WAIT_RECEIVE':
      return '待收货';
    case 'CHECKING':
      return '检测中';
    case 'DONE':
      return '完成';
    default:
      return '';
  }
});
