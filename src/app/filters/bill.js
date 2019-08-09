import Vue from 'vue';

Vue.filter('channelAndStatus', val => {
  switch (val) {
    case 'ALIPAY':
      return '支付宝';
    case 'WECHAT':
      return '微信';
    case 'UNPAID':
      return '失败';
    case 'PAID':
      return '成功';
    default:
      return '_ _';
  }
});

Vue.filter('withdrawalStatus', val => {
  switch (val) {
    case 'WAIT_PROCESS':
      return '等待处理';
    case 'CHECK_SUCCESS':
      return '审核通过';
    case 'CHECK_FAIL':
      return '审核失败';
    case 'PROCESS_SUCCESS':
      return '打款成功';
    case 'PROCESS_FAIL':
      return '打款失败';
    default:
      return '_ _';
  }
});

Vue.filter('withdrawalType', val => {
  switch (val) {
    case 'PRIVATE':
      return '对私';
    case 'PUBLIC':
      return '对公';
    default:
      return '_ _';
  }
});

Vue.filter('consumeType', val => {
  switch (val) {
    case 'UP_TO_VIP':
      return '升级会员';
    case 'UP_TO_AGENT':
      return '升级代理';
    case 'MALL_CONSUMPTION':
      return '商城消费';
    case 'PURCHASE':
      return '会员采购';
    case 'ONLINE_INQUIRY':
      return '在线问诊';
    case 'USER_ACTIVE':
      return '用户激活';
    default:
      return '_ _';
  }
});
