import Vue from 'vue';

Vue.filter('mediaType', val => {
  switch (val) {
    case 'TEXT':
      return '文章';
    case 'VIDEO':
      return '视频';
    case 'AUDIO':
      return '音频';
    default:
      return '';
  }
});
Vue.filter('lockStatus', val => {
  switch (val) {
    case 'NORMAL':
      return '正常';
    case 'LOCK':
      return '锁定';
    case 'TO_BE_AUDITED':
      return '待审核';
    default:
      return null;
  }
});
Vue.filter('lockButton', val => {
  switch (val) {
    case 'NORMAL':
      return '锁定';
    case 'LOCK':
      return '解锁';
    case 'TO_BE_AUDITED':
      return '锁定'; // 待审核
    default:
      return null;
  }
});
Vue.filter('objType', val => {
  switch (val) {
    case 'ARTICLE':
      return '文章';
    case 'COMMENT':
      return '回复';
    default:
      return null;
  }
});
Vue.filter('InterceptInfo', val => {
  if (val.length >= 100) {
    return val.substring(0, 100) + '......';
  }
  return val;
});
