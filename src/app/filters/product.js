import Vue from 'vue';

Vue.filter('productStatus', val => {
  switch (val) {
    case 'DOWN':
      return '下架';
    case 'UP':
      return '上架';
    default:
      return '';
  }
});

Vue.filter('productCategoryAttrType', val => {
  switch (val) {
    case 'TEXT':
      return '文本';
    case 'SINGLE':
      return '单选';
    case 'MULTISELECT':
      return '多选';
    case 'DATE':
      return '日期';
    case 'NUMBER':
      return '数值';
    default:
      return '';
  }
});

Vue.filter('attributeType', val => {
  switch (val) {
    case 'TEXT':
      return '文本';
    case 'RADIO':
      return '单选';
    case 'CHECKBOX':
      return '多选';
    case 'DATE':
      return '日期';
    case 'INTEGER':
      return '数值';
    default:
      return '';
  }
});
