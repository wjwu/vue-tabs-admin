export const HOME = 'HOME';
export const PRODUCT = 'PRODUCT';
export const PRODUCT_CLASSIFICATION = 'PRODUCT_CLASSIFICATION';
export const PRODUCT_CHARACTERISTIC = 'PRODUCT_CHARACTERISTIC';
export const PRODUCT_REVIEW = 'PRODUCT_REVIEW';
export const PRODUCT_STORES = 'PRODUCT_STORES';
export const PRODUCT_CATEGORY = 'PRODUCT_CATEGORY';
export const PRODUCT_MANAGE = 'PRODUCT_MANAGE';
export const PRODUCT_ORDINARYORDER = 'PRODUCT_ORDINARYORDER';
export const ORDINARY_ORDER_DETAIL = 'ORDINARY_ORDER_DETAIL';
export const PRODUCT_SERVICEORDER = 'PRODUCT_SERVICEORDER';
export const SERVICE_ORDER_DETAIL = 'SERVICE_ORDER_DETAIL';
export const PRODUCT_STORES_ADD = 'PRODUCT_STORES_ADD';
export const PRODUCT_CATEGORY_ADD = 'PRODUCT_CATEGORY_ADD';
export const PRODUCT_CATEGORY_EDIT = 'PRODUCT_CATEGORY_EDIT';
export const COUPON = 'COUPON';
export const COUPON_LIST = 'COUPON_LIST';
export const COUPON_ADD = 'COUPON_ADD';
export const FINANCE = 'FINANCE';
export const FINANCE_PUBLIC = 'FINANCE_PUBLIC';
export const FINANCE_PRIVATE = 'FINANCE_PRIVATE';
export const FINANCE_QUERYBANKROLL = 'FINANCE_QUERYBANKROLL';
export const FINANCE_BILLS_LIST = 'FINANCE_BILLS_LIST';
export const FINANCE_BILLS_STATISTICS = 'FINANCE_BILLS_STATISTICS';
export const FINANCE_WALLET = 'FINANCE_WALLET';
export const FINANCE_WALLET_DETAILS = 'FINANCE_WALLET_DETAILS';
export const FINANCE_REBATE_LIST = 'FINANCE_REBATE_LIST';
export const FINANCE_REBATE_STATISTICS = 'FINANCE_REBATE_STATISTICS';
export const USER = 'USER';
export const USER_LIST = 'USER_LIST';
export const USER_DETAIL = 'USER_DETAIL';
export const USER_AGENT = 'USER_AGENT';
export const USER_LOWERS = 'USER_LOWERS';
export const OPERATION = 'OPERATION';
export const OPERATION_ARTICLE = 'OPERATION_ARTICLE';
export const OPERATION_ALBUM = 'OPERATION_ALBUM';
export const OPERATION_ARTICLE_ADD = 'OPERATION_ARTICLE_ADD';
export const OPERATION_ARTICLE_EDIT = 'OPERATION_ARTICLE_EDIT';
export const OPERATION_ALBUM_ADD = 'OPERATION_ALBUM_ADD';
export const OPERATION_ALBUM_EDIT = 'OPERATION_ALBUM_EDIT';
export const OPERATION_ALBUM_DETAILS = 'OPERATION_ALBUM_DETAILS';
export const OPERATION_CATEGORY = 'OPERATION_CATEGORY';
export const OPERATION_COLUMN = 'OPERATION_COLUMN';
export const OPERATION_COLUMN_ADD = 'OPERATION_COLUMN_ADD';
export const OPERATION_COLUMN_EDIT = 'OPERATION_COLUMN_EDIT';
export const OPERATION_COMMENTS = 'OPERATION_COMMENTS';
export const OPERATION_SETTING = 'OPERATION_SETTING';
export const OPERATION_SETTING_INTERACTION = 'OPERATION_SETTING_INTERACTION';
export const OPERATION_SETTING_KEYWORD = 'OPERATION_SETTING_KEYWORD';
export const OPERATION_BROADCAST = 'OPERATION_BROADCAST';
export const OPERATION_BROADCAST_DETAILS = 'OPERATION_BROADCAST_DETAILS';
export const OPERATION_INTERLOCUTION = 'OPERATION_INTERLOCUTION';
export const OPERATION_INTERLOCUTION_ANSWER = 'OPERATION_INTERLOCUTION_ANSWER';
export const SELF_TEST = 'SELF_TEST';
export const SELF_TEST_LIST = 'SELF_TEST_LIST';
export const SELF_TEST_ADD = 'SELF_TEST_ADD';
export const SELF_TEST_EDIT = 'SELF_TEST_EDIT';
export const SELF_TEST_DETAIL = 'SELF_TEST_DETAIL';
export const SELF_TEST_STATISTICS = 'SELF_TEST_STATISTICS';
export const SELF_TEST_STATISTICS_DETAIL = 'SELF_TEST_STATISTICS_DETAIL';
export const MARKET = 'MARKET';
export const MARKET_ENTERPRISE_AUDIT = 'MARKET_ENTERPRISE_AUDIT';
export const PUSH = 'PUSH';
export const PUSH_SCENE = 'PUSH_SCENE';
export const PUSH_MANUAL = 'PUSH_MANUAL';
export const PUSH_TEMPLATE = 'PUSH_TEMPLATE';
export const SELF_TEST_SET_TYPE = 'SELF_TEST_SET_TYPE';
export const SELF_TEST_SET_TEMPLATE = 'SELF_TEST_SET_TEMPLATE';
export const SELF_TEST_SET_SOLUTION = 'SELF_TEST_SET_SOLUTION';
export const KNOWLEDGE = 'KNOWLEDGE';
export const KNOWLEDGE_SPORT = 'KNOWLEDGE_SPORT';
export const KNOWLEDGE_NUTRITION = 'KNOWLEDGE_NUTRITION';
export const KNOWLEDGE_PSYCHOLOGY = 'KNOWLEDGE_PSYCHOLOGY';
export const SOLUTION = 'SOLUTION';
export const SOLUTION_ADD = 'SOLUTION_ADD';
export const SOLUTION_DETAIL = 'SOLUTION_DETAIL';
export const SOLUTION_EDIT = 'SOLUTION_EDIT';
export const SOLUTION_LIST = 'SOLUTION_LIST';
export const SOLUTION_FEEDBACK = 'SOLUTION_FEEDBACK';
export const SOLUTION_SETTING = 'SOLUTION_SETTING';
export const SETUP = 'SETUP';
export const SETUP_ROLE = 'SETUP_ROLE';
export const SETUP_ACCOUNT = 'SETUP_ACCOUNT';
export const AD = 'AD';
export const AD_SITE_LIST = 'AD_SITE_LIST';
export const AD_SITE_ADD = 'AD_SITE_ADD';
export const AD_SITE_EDIT = 'AD_SITE_EDIT';
export const AD_MANAGE = 'AD_MANAGE';
export const AD_LIST = 'AD_LIST';
export const AD_EDIT = 'AD_EDIT';
export const AD_ADD = 'AD_ADD';
export const ADD_SETTING = 'ADD_SETTING';
export const EDIT_SETTING = 'EDIT_SETTING';

export const BILL = 'BILL';
export const BILL_RECHARGE_LIST = 'BILL_RECHARGE_LIST';
export const BILL_CONSUME_LIST = 'BILL_CONSUME_LIST';
export const BILL_WITHDRAWAL_LIST = 'BILL_WITHDRAWAL_LIST';
export const BILL_REWARD_LIST = 'BILL_REWARD_LIST';
export const SALESCHECK = 'SALESCHECK';

export const ORDER = 'ORDER';
export const RETURN = 'RETURN';
export const REFUND = 'REFUND';

export default {
  [HOME]: {
    name: HOME,
    title: '首页',
    path: '/',
    isActive: true,
    loading: true
  },
  [PRODUCT]: {
    name: PRODUCT,
    title: '商品',
    path: '/product',
    isActive: false,
    loading: true
  },
  [PRODUCT_CLASSIFICATION]: {
    name: PRODUCT_CLASSIFICATION,
    title: '类目管理',
    path: '/product/classification',
    isActive: false,
    loading: true
  },
  [PRODUCT_CHARACTERISTIC]: {
    name: PRODUCT_CHARACTERISTIC,
    title: '属性管理',
    path: '/product/characteristic',
    isActive: false,
    loading: true
  },
  [PRODUCT_MANAGE]: {
    name: PRODUCT_MANAGE,
    title: '商品管理',
    path: '/product/manage',
    isActive: false,
    loading: true
  },
  [PRODUCT_ORDINARYORDER]: {
    name: PRODUCT_ORDINARYORDER,
    title: '普通订单',
    path: '/product/ordinaryOrder',
    isActive: false,
    loading: true
  },
  [ORDINARY_ORDER_DETAIL]: orderNo => {
    return {
      name: `${ORDINARY_ORDER_DETAIL}_${orderNo}`,
      title: '订单详情',
      path: `/product/ordinaryDetail/${orderNo}`,
      isActive: false,
      loading: true
    };
  },
  [PRODUCT_SERVICEORDER]: {
    name: PRODUCT_SERVICEORDER,
    title: '服务订单',
    path: '/product/serviceOrder',
    isActive: false,
    loading: true
  },
  [SERVICE_ORDER_DETAIL]: orderNo => {
    return {
      name: `${SERVICE_ORDER_DETAIL}_${orderNo}`,
      title: '订单详情',
      path: `/product/serviceDetail/${orderNo}`,
      isActive: false,
      loading: true
    };
  },
  [PRODUCT_REVIEW]: {
    name: PRODUCT_REVIEW,
    title: '入驻审核',
    path: '/product/review',
    isActive: false,
    loading: true
  },
  [PRODUCT_STORES]: {
    name: PRODUCT_STORES,
    title: '店铺管理',
    path: '/product/stores',
    isActive: false,
    loading: true
  },
  [PRODUCT_STORES_ADD]: {
    name: PRODUCT_STORES_ADD,
    title: '添加店铺',
    path: '/product/stores/add',
    isActive: false,
    loading: true
  },
  [PRODUCT_CATEGORY]: {
    name: PRODUCT_CATEGORY,
    title: '商品分类管理',
    path: '/product/category',
    isActive: false,
    loading: true
  },
  [PRODUCT_CATEGORY_ADD]: {
    name: PRODUCT_CATEGORY_ADD,
    title: '添加商品分类',
    path: '/product/category/add',
    isActive: false,
    loading: true
  },
  [PRODUCT_CATEGORY_EDIT](id) {
    return {
      name: PRODUCT_CATEGORY_EDIT,
      title: '修改商品分类',
      path: `/product/category/edit/${id}`,
      isActive: false,
      loading: true
    };
  },
  [COUPON]: {
    name: COUPON,
    title: '优惠券',
    path: '/coupon',
    isActive: false,
    loading: true
  },
  [COUPON_LIST]: {
    name: COUPON_LIST,
    title: '优惠券列表',
    path: '/coupon/couponList',
    isActive: false,
    loading: true
  },
  [COUPON_ADD]: {
    name: COUPON_ADD,
    title: '新增优惠券',
    path: '/coupon/Addcoupon',
    isActive: false,
    loading: true
  },
  [FINANCE]: {
    name: FINANCE,
    title: '财务',
    path: '/finance',
    isActive: false,
    loading: true
  },
  [FINANCE_PUBLIC]: {
    name: FINANCE_PUBLIC,
    title: '对公提现审核',
    path: '/finance/public',
    isActive: false,
    loading: true
  },
  [FINANCE_PRIVATE]: {
    name: FINANCE_PRIVATE,
    title: '对私提现审核',
    path: '/finance/private',
    isActive: false,
    loading: true
  },
  [FINANCE_QUERYBANKROLL]: {
    name: FINANCE_QUERYBANKROLL,
    title: '资金流水查询',
    path: '/finance/queryBankroll',
    isActive: false,
    loading: true
  },
  [FINANCE_BILLS_STATISTICS]: {
    name: FINANCE_BILLS_STATISTICS,
    title: '账单统计',
    path: '/finance/billsStatistics',
    isActive: false,
    loading: true
  },
  [FINANCE_BILLS_LIST]: {
    name: FINANCE_BILLS_LIST,
    title: '账单列表',
    path: '/finance/billsList',
    isActive: false,
    loading: true
  },
  [FINANCE_WALLET]: {
    name: FINANCE_WALLET,
    title: '钱包管理',
    path: '/finance/wallet',
    isActive: false,
    loading: true
  },
  [FINANCE_WALLET_DETAILS](walletInfo) {
    return {
      name: `FINANCE_WALLET_DETAILS_${walletInfo}`,
      title: '钱包详情',
      path: `/finance/wallet_details/${walletInfo}`,
      isActive: false,
      loading: true
    };
  },
  [FINANCE_REBATE_LIST]: {
    name: FINANCE_REBATE_LIST,
    title: '返利明细',
    path: '/finance/rebate_list',
    isActive: false,
    loading: true
  },
  [FINANCE_REBATE_STATISTICS]: {
    name: FINANCE_REBATE_STATISTICS,
    title: '返利统计',
    path: '/finance/rebate_statistics',
    isActive: false,
    loading: true
  },
  [SALESCHECK]: {
    name: SALESCHECK,
    title: '销售核对',
    path: '/finance/salesCheck',
    isActive: false,
    loading: true
  },
  [USER_LIST]: {
    name: USER_LIST,
    title: '用户列表',
    path: '/user/list',
    isActive: false,
    loading: true
  },
  [USER_DETAIL](userId) {
    return {
      name: USER_DETAIL,
      title: '用户详情',
      path: `/user/detail/${userId}`,
      isActive: false,
      loading: true
    };
  },
  [USER_AGENT]: {
    name: USER_AGENT,
    title: '代理商管理',
    path: '/user/agent',
    isActive: false,
    loading: true
  },
  [USER_LOWERS]: {
    name: USER_LOWERS,
    title: '查看下级裂变数',
    path: '/user/lowers',
    isActive: false,
    loading: true
  },
  [OPERATION]: {
    name: OPERATION,
    title: '看健',
    path: '/operation',
    isActive: false,
    loading: true
  },
  [OPERATION_ARTICLE]: {
    name: OPERATION_ARTICLE,
    title: '内容管理',
    path: '/operation/article',
    isActive: false,
    loading: true
  },
  [OPERATION_ALBUM]: {
    name: OPERATION_ALBUM,
    title: '专辑管理',
    path: '/operation/album',
    isActive: false,
    loading: true
  },
  [OPERATION_ARTICLE_ADD](mediaType, albumId, columnId) {
    let path = `/operation/article/add/${mediaType}`;
    if (albumId) {
      if (columnId) {
        path = `/operation/article/add/${albumId}/${mediaType}/${columnId}`;
      } else {
        path = `/operation/article/add/${albumId}/${mediaType}`;
      }
    } else {
      if (columnId) {
        path = `/operation/article/add/${mediaType}/${columnId}`;
      } else {
        path = `/operation/article/add/${mediaType}`;
      }
    }
    return {
      name: OPERATION_ARTICLE_ADD,
      title: '添加内容',
      path,
      isActive: false,
      loading: true
    };
  },
  [OPERATION_ARTICLE_EDIT](id, name, status) {
    let path = `/operation/article/edit/${id}`;
    if (status) {
      path = `/operation/article/edit/${id}/${status}`;
    }
    return {
      name: `${OPERATION_ARTICLE_EDIT}_${id}`,
      title: `修改内容-${name}`,
      path,
      isActive: false,
      loading: true
    };
  },
  [OPERATION_ALBUM_ADD]: {
    name: OPERATION_ALBUM_ADD,
    title: '添加专辑',
    path: '/operation/album/add',
    isActive: false,
    loading: true
  },
  [OPERATION_ALBUM_EDIT](id, name) {
    return {
      name: OPERATION_ALBUM_EDIT,
      title: `修改专辑-${name}`,
      path: `/operation/album/edit/${id}`,
      isActive: false,
      loading: true
    };
  },
  [OPERATION_ALBUM_DETAILS](id, name, mediaType, columnId) {
    return {
      name: OPERATION_ALBUM_DETAILS,
      title: `专辑内容-${name}`,
      path: `/operation/album/details/${id}/${name}/${mediaType}/${columnId}`,
      isActive: false,
      loading: true
    };
  },
  [OPERATION_CATEGORY]: {
    name: OPERATION_CATEGORY,
    title: '分类管理',
    path: '/operation/category',
    isActive: false,
    loading: true
  },
  [OPERATION_COLUMN]: {
    name: OPERATION_COLUMN,
    title: '专栏管理',
    path: '/operation/column',
    isActive: false,
    loading: true
  },
  [OPERATION_COLUMN_ADD]: {
    name: OPERATION_COLUMN_ADD,
    title: '添加专栏',
    path: '/operation/column/add',
    isActive: false,
    loading: true
  },
  [OPERATION_COLUMN_EDIT](id) {
    return {
      name: `${OPERATION_COLUMN_EDIT}_${id}`,
      title: '修改专栏',
      path: `/operation/column/edit/${id}`,
      isActive: false,
      loading: true
    };
  },
  [OPERATION_COMMENTS]: {
    name: OPERATION_COMMENTS,
    title: '评论管理',
    path: '/operation/comments',
    isActive: false,
    loading: true
  },
  [OPERATION_SETTING]: {
    name: OPERATION_SETTING,
    title: '运营设置',
    path: '/operation/setting',
    isActive: false,
    loading: true
  },
  [OPERATION_SETTING_INTERACTION]: {
    name: OPERATION_SETTING_INTERACTION,
    title: '互动设置',
    path: '/operation/setting/interaction',
    isActive: false,
    loading: true
  },
  [OPERATION_SETTING_KEYWORD]: {
    name: OPERATION_SETTING_KEYWORD,
    title: '关键词',
    path: '/operation/setting/keyword',
    isActive: false,
    loading: true
  },
  [OPERATION_BROADCAST]: {
    name: OPERATION_BROADCAST,
    title: '直播管理',
    path: '/operation/broadcast',
    isActive: false,
    loading: true
  },
  [OPERATION_BROADCAST_DETAILS]: {
    name: OPERATION_BROADCAST_DETAILS,
    title: '直播记录',
    path: '/operation/broadcast/details',
    isActive: false,
    loading: true
  },
  [OPERATION_INTERLOCUTION]: {
    name: OPERATION_INTERLOCUTION,
    title: '问答管理',
    path: '/operation/interlocution',
    isActive: false,
    loading: true
  },
  [OPERATION_INTERLOCUTION_ANSWER](questionId) {
    return {
      name: OPERATION_INTERLOCUTION_ANSWER,
      title: '回答详情',
      path: `/operation/interlocution/answer/${questionId}`,
      isActive: false,
      loading: true
    };
  },
  [SELF_TEST]: {
    name: SELF_TEST,
    title: '自测题管理',
    path: '/selfTest',
    isActive: false,
    loading: true
  },
  [SELF_TEST_STATISTICS]: {
    name: SELF_TEST_STATISTICS,
    title: '自测题统计列表',
    path: '/selfTest/statistics',
    isActive: false,
    loading: true
  },
  [SELF_TEST_STATISTICS_DETAIL](id) {
    return {
      name: `SELF_TEST_STATISTICS_DETAIL_${id}`,
      title: '自测题统计详情',
      path: `/selfTest/statistics_detail/${id}`,
      isActive: false,
      loading: true
    };
  },
  [SELF_TEST_LIST]: {
    name: SELF_TEST_LIST,
    title: '自测题列表',
    path: '/selfTest/list',
    isActive: false,
    loading: true
  },
  [SELF_TEST_ADD]: {
    name: SELF_TEST_ADD,
    title: '新增自测题',
    path: '/selfTest/add',
    isActive: false,
    loading: true
  },
  [SELF_TEST_EDIT](id) {
    return {
      name: `SELF_TEST_EDIT_${id}`,
      title: '修改自测题',
      path: `/selfTest/edit/${id}`,
      isActive: false,
      loading: true
    };
  },
  [SELF_TEST_DETAIL](id) {
    return {
      name: `SELF_TEST_DETAIL_${id}`,
      title: '自测题详情',
      path: `/selfTest/detail/${id}`,
      isActive: false,
      loading: true
    };
  },
  [SELF_TEST_SET_TYPE]: {
    name: SELF_TEST_SET_TYPE,
    title: '设置题型',
    path: '/selfTest/setType',
    isActive: false,
    loading: true
  },
  [SELF_TEST_SET_TEMPLATE]: {
    name: SELF_TEST_SET_TEMPLATE,
    title: '设置前端显示',
    path: '/selfTest/testTemplate',
    isActive: false,
    loading: true
  },

  [SELF_TEST_SET_SOLUTION](id) {
    return {
      name: `SELF_TEST_SET_SOLUTION _${id}`,
      title: '配置方案',
      path: `/selfTest/setSolution/${id}`,
      isActive: false,
      loading: true
    };
  },
  [SOLUTION_ADD]: {
    name: SOLUTION_ADD,
    title: '新增方案',
    path: '/selfTest/addSolution',
    isActive: false,
    loading: true
  },
  [SOLUTION_EDIT](id) {
    return {
      name: `SOLUTION_EDIT_${id}`,
      title: '编辑方案',
      path: `/selfTest/editSolution/${id}`,
      isActive: false,
      loading: true
    };
  },
  [SOLUTION_DETAIL](id) {
    return {
      name: `SOLUTION_DETAIL_${id}`,
      title: '查看方案',
      path: `/selfTest/solutionDetail/${id}`,
      isActive: false,
      loading: true
    };
  },
  [SOLUTION_LIST]: {
    name: SOLUTION_LIST,
    title: '方案列表',
    path: '/selfTest/solutionList',
    isActive: false,
    loading: true
  },
  [SOLUTION_FEEDBACK]: {
    name: SOLUTION_FEEDBACK,
    title: '方案反馈',
    path: '/selfTest/solutionFeedback',
    isActive: false,
    loading: true
  },
  [SOLUTION_SETTING]: {
    name: SOLUTION_SETTING,
    title: '方案设置',
    path: '/selfTest/solutionSetting',
    isActive: false,
    loading: true
  },
  [ADD_SETTING]: {
    name: ADD_SETTING,
    title: '添加方案设置',
    path: '/selfTest/addSetting',
    isActive: false,
    loading: true
  },
  [EDIT_SETTING](id) {
    return {
      name: `EDIT_SETTING_${id}`,
      title: '编辑方案设置',
      path: `/selfTest/editSetting/${id}`,
      isActive: false,
      loading: true
    };
  },
  [KNOWLEDGE]: {
    name: KNOWLEDGE,
    title: '动作库',
    path: '/knowledge',
    isActive: false,
    loading: true
  },
  [KNOWLEDGE_SPORT]: {
    name: KNOWLEDGE_SPORT,
    title: '运动',
    path: '/knowledge/sport',
    isActive: false,
    loading: true
  },
  [KNOWLEDGE_NUTRITION]: {
    name: KNOWLEDGE_NUTRITION,
    title: '营养',
    path: '/knowledge/nutrition',
    isActive: false,
    loading: true
  },
  [KNOWLEDGE_PSYCHOLOGY]: {
    name: KNOWLEDGE_PSYCHOLOGY,
    title: '心理',
    path: '/knowledge/psychology',
    isActive: false,
    loading: true
  },
  [MARKET_ENTERPRISE_AUDIT]: {
    name: MARKET_ENTERPRISE_AUDIT,
    title: '企业认证审核',
    path: '/market/enterprise',
    isActive: false,
    loading: true
  },
  [PUSH_SCENE]: {
    name: PUSH_SCENE,
    title: '场景管理',
    path: '/push/scene',
    isActive: false,
    loading: true
  },
  [PUSH_MANUAL]: {
    name: PUSH_MANUAL,
    title: '手动推送',
    path: '/push/manual',
    isActive: false,
    loading: true
  },
  [PUSH_TEMPLATE](id, name) {
    return {
      name: PUSH_TEMPLATE,
      title: `模板管理-${name}`,
      path: `/push/template/${id}`,
      isActive: false,
      loading: true
    };
  },
  [SETUP]: {
    name: SETUP,
    title: '系统设置',
    path: '/setup',
    isActive: false,
    loading: true
  },
  [SETUP_ROLE]: {
    name: SETUP_ROLE,
    title: '角色管理',
    path: '/setup/role',
    isActive: false,
    loading: true
  },
  [SETUP_ACCOUNT]: {
    name: SETUP_ACCOUNT,
    title: '账号管理',
    path: '/setup/account',
    isActive: false,
    loading: true
  },
  [AD]: {
    name: AD,
    title: '广告管理',
    path: '/push/manual',
    isActive: false,
    loading: true
  },
  [AD_SITE_LIST]: {
    name: AD_SITE_LIST,
    title: '广告位管理',
    path: '/ad/site',
    isActive: false,
    loading: true
  },
  [AD_SITE_ADD]: {
    name: AD_SITE_ADD,
    title: '添加广告位',
    path: '/ad/site/add',
    isActive: false,
    loading: true
  },
  [AD_SITE_EDIT](id, name) {
    return {
      name: AD_SITE_EDIT,
      title: `编辑广告位-${name}`,
      path: `/ad/site/edit/${id}`,
      isActive: false,
      loading: true
    };
  },
  [AD_LIST]: {
    name: AD_LIST,
    title: '广告管理',
    path: '/ad/list',
    isActive: false,
    loading: true
  },
  [AD_EDIT](id, name) {
    return {
      name: `AD_EDIT_${id}`,
      title: `修改广告-${name}`,
      path: `/ad/edit/${id}`,
      isActive: false,
      loading: true
    };
  },
  [AD_ADD]: {
    name: AD_ADD,
    title: '添加广告',
    path: '/ad/add',
    isActive: false,
    loading: true
  },
  [AD_MANAGE](id, name) {
    return {
      name: AD_MANAGE,
      title: `${name}-广告管理`,
      path: `/ad/manage/${id}`,
      isActive: false,
      loading: true
    };
  },
  [BILL]: {
    name: BILL,
    title: '财务账单',
    path: '/bill',
    isActive: false,
    loading: true
  },
  [BILL_RECHARGE_LIST]: {
    name: BILL_RECHARGE_LIST,
    title: '充值账单',
    path: '/bill/recharge',
    isActive: false,
    loading: true
  },
  [BILL_CONSUME_LIST]: {
    name: BILL_CONSUME_LIST,
    title: '消费账单',
    path: '/bill/consume',
    isActive: false,
    loading: true
  },
  [BILL_WITHDRAWAL_LIST]: {
    name: BILL_WITHDRAWAL_LIST,
    title: '提现账单',
    path: '/bill/withdrawal',
    isActive: false,
    loading: true
  },
  [BILL_REWARD_LIST]: {
    name: BILL_REWARD_LIST,
    title: '达标账单',
    path: '/bill/reward',
    isActive: false,
    loading: true
  },
  [RETURN]: {
    name: RETURN,
    title: '退货单',
    path: '/order/return',
    isActive: false,
    loading: true
  },
  [REFUND]: {
    name: REFUND,
    title: '退款单',
    path: '/order/refund',
    isActive: false,
    loading: true
  }
};
