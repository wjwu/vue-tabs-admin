import Vue from 'vue';

Vue.filter('jumpType', val => {
  switch (val) {
    case 'URL':
      return 'URL';
    case 'ITEM_INFO':
      return '商品';
    case 'MEDIA':
      return '专栏';
    case 'ARTICLE':
      return '文章';
    case 'SHOP':
      return '店铺';
    case 'ALBUM':
      return '专辑';
    case 'QA':
      return '问答';
    case 'H5_REL':
      return 'H5Rel';
    default:
      return '';
  }
});
