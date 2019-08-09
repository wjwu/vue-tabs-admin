import Vue from 'vue';

Vue.filter('auditStatus', val => {
  switch (val) {
    case 'SUCCESS':
      return '已通过';
    case 'REFUSE':
      return '未通过';
    case 'PENDING':
      return '等待审核';
    default:
      return '';
  }
});
