import Vue from 'vue';
import format from 'date-fns/format';

Vue.filter('stateValue', val => {
  switch (val) {
    case 'WAIT_PROCESS':
      return '等待处理';
    case 'CHECK_SUCCESS':
      return '审核成功';
    case 'CHECK_FAIL':
      return '审核失败';
    case 'PROCESS_SUCCESS':
      return '打款成功';
    case 'PROCESS_FAIL':
      return '打款失败';
    default:
      return '';
  }
});
Vue.filter('submissionTime', (time, i) => {
  if (time != null && time.length !== 0) {
    return Vue.filter('timeShortFormatter')(time[i]);
  } else {
    return '';
  }
});
Vue.filter('billTimeFormatter', val => {
  return format(val, 'YYYY-MM-DD HH:mm:ss');
});
Vue.filter('couponTimeFormatter', val => {
  return format(val, 'YYYY-MM-DD');
});
Vue.filter('invoiceStatusFilter', val => {
  switch (val) {
    case 'RECEIVED':
      return '已收到';
    case 'UNRECEIVED':
      return '未收到';
    default:
      return '';
  }
});
Vue.filter('billTypeFilter', val => {
  switch (val) {
    case 'RECHARGE':
      return '充值';
    case 'CONSUMPTION':
      return '消费';
    case 'WITHDRAW':
      return '提现';
    case 'REWARD':
      return '达标奖励';
    case 'CONSUMPTION_REFUND':
      return '消费退款';
    case 'RECHARGE_REFUND':
      return '充值退款';
  }
});
Vue.filter('billStatusFilter', val => {
  switch (val) {
    case 'OK':
      return '成功';
    case 'PAID':
      return '充值成功';
    case 'UNPAID':
      return '充值失败';
    case 'WAIT_PROCESS':
      return '等待处理';
    case 'CHECK_SUCCESS':
      return '验证成功';
    case 'CHECK_FAIL':
      return '验证失败';
    case 'PROCESS_FAIL':
      return '打款失败';
    case 'PROCESS_SUCCESS':
      return '打款成功';
    case 'SUCCESS':
      return '退款成功';
    case 'FAIL':
      return '退款失败';
    case 'APPLY':
      return '退款申请中';
    case 'AUDIT':
      return '退款审核中';
  }
});
Vue.filter('billConsumptionTypeFilter', val => {
  switch (val) {
    case 'USER_ACTIVE':
      return '用户激活';
    case 'UP_TO_VIP':
      return '升级会员';
    case 'UP_TO_AGENT':
      return '升级代理';
    case 'MALL_CONSUMPTION':
      return '商城消费';
    case 'PURCHASE':
      return '采购会员消费';
    case 'ONLINE_INQUIRY':
      return '在线问诊';
  }
});
Vue.filter('rechargeChannelFilter', val => {
  switch (val) {
    case 'WECHAT':
      return '微信';
    case 'ALIPAY':
      return '支付宝';
    case 'BANK':
      return '银行卡';
    case 'BALANCE':
      return '余额';
  }
});
