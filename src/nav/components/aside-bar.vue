<template>
  <div class="asider">
    <div class="logo">
      中清云联后台管理系统
    </div>
    <el-menu :default-active="defaultActive" class="main-menu">
      <el-menu-item :index="HOME" @click="handleClickMenu(HOME)">
        <i class="iconfont icon-ic-backstage_" /> 首页
      </el-menu-item>
      <el-submenu :index="PRODUCT" v-if="$validate(['m2','m3','m4','m5','m28'])">
        <template slot="title">
          <i class="iconfont icon-ic-backstage-6" />
          <span>商品</span>
        </template>
        <el-menu-item :index="PRODUCT_CLASSIFICATION" @click="handleClickMenu(PRODUCT_CLASSIFICATION)" v-if="$validate('m2')">
          类目管理
        </el-menu-item>
        <el-menu-item :index="PRODUCT_CHARACTERISTIC" @click="handleClickMenu(PRODUCT_CHARACTERISTIC)" v-if="$validate('m3')">
          属性管理
        </el-menu-item>
        <el-menu-item :index="PRODUCT_MANAGE" @click="handleClickMenu(PRODUCT_MANAGE)" v-if="$validate('m28')">
          商品管理
        </el-menu-item>
        <el-menu-item :index="PRODUCT_ORDINARYORDER" @click="handleClickMenu(PRODUCT_ORDINARYORDER)">
          普通订单
        </el-menu-item>
        <el-menu-item :index="PRODUCT_SERVICEORDER" @click="handleClickMenu(PRODUCT_SERVICEORDER)">
          服务订单
        </el-menu-item>
        <el-menu-item :index="PRODUCT_REVIEW" @click="handleClickMenu(PRODUCT_REVIEW)" v-if="$validate('m4')">
          入驻审核
        </el-menu-item>
        <el-menu-item :index="PRODUCT_STORES" @click="handleClickMenu(PRODUCT_STORES)" v-if="$validate('m5')">
          店铺管理
        </el-menu-item>
      </el-submenu>
      <el-submenu :index="COUPON" v-if="$validate(['m42'])">
        <template slot="title">
          <i class="iconfont icon-ic-backstage-6" />
          <span>优惠券</span>
        </template>
        <el-menu-item :index="COUPON_LIST" @click="handleClickMenu(COUPON_LIST)" v-if="$validate('m42')">
          优惠券列表
        </el-menu-item>
      </el-submenu>
      <el-submenu :index="FINANCE" v-if="$validate(['m6','m7','m29','m30','m31','m40','m41'])">
        <template slot="title">
          <i class="iconfont icon-ic-backstage-4" />
          <span>财务</span>
        </template>
        <el-menu-item :index="FINANCE_PUBLIC" @click="handleClickMenu(FINANCE_PUBLIC)" v-if="$validate('m6')">
          对公提现审批
        </el-menu-item>
        <el-menu-item :index="FINANCE_PRIVATE" @click="handleClickMenu(FINANCE_PRIVATE)" v-if="$validate('m7')">
          对私提现审批
        </el-menu-item>
        <el-menu-item :index="FINANCE_BILLS_LIST" @click="handleClickMenu(FINANCE_BILLS_LIST)" v-if="$validate('m29')">
          账单列表
        </el-menu-item>
        <el-menu-item :index="FINANCE_WALLET" @click="handleClickMenu(FINANCE_WALLET)" v-if="$validate('m30')">
          钱包管理
        </el-menu-item>
        <el-menu-item :index="FINANCE_BILLS_STATISTICS" @click="handleClickMenu(FINANCE_BILLS_STATISTICS)" v-if="$validate('m31')">
          账单统计
        </el-menu-item>
        <el-menu-item :index="FINANCE_REBATE_LIST" @click="handleClickMenu(FINANCE_REBATE_LIST)" v-if="$validate('m40')">
          返利明细
        </el-menu-item>
        <el-menu-item :index="FINANCE_REBATE_STATISTICS" @click="handleClickMenu(FINANCE_REBATE_STATISTICS)" v-if="$validate('m41')">
          返利统计
        </el-menu-item>
        <el-menu-item :index="SALESCHECK" @click="handleClickMenu(SALESCHECK)" v-if="$validate('m41')">
          销售核对
        </el-menu-item>
      </el-submenu>
      <el-submenu :index="BILL" v-if="$validate(['m4300','m4400','m4500','m4600'])">
        <template slot="title">
          <i class="iconfont icon-ic-backstage-4" />
          <span>财务账单</span>
        </template>
        <el-menu-item :index="BILL_RECHARGE_LIST" @click="handleClickMenu(BILL_RECHARGE_LIST)" v-if="$validate('m4300')">
          充值账单
        </el-menu-item>
        <el-menu-item :index="BILL_CONSUME_LIST" @click="handleClickMenu(BILL_CONSUME_LIST)" v-if="$validate('m4400')">
          消费账单
        </el-menu-item>
        <el-menu-item :index="BILL_WITHDRAWAL_LIST" @click="handleClickMenu(BILL_WITHDRAWAL_LIST)" v-if="$validate('m4500')">
          提现账单
        </el-menu-item>
        <el-menu-item :index="BILL_REWARD_LIST" @click="handleClickMenu(BILL_REWARD_LIST)" v-if="$validate('m4600')">
          达标账单
        </el-menu-item>
      </el-submenu>
      <el-submenu :index="USER" v-if="$validate(['m8','m9','m32'])">
        <template slot="title">
          <i class="iconfont icon-ic-backstage-" />
          <span>用户</span>
        </template>
        <el-menu-item :index="USER_LIST" @click="handleClickMenu(USER_LIST)" v-if="$validate('m32')">
          用户列表
        </el-menu-item>
        <el-menu-item :index="USER_AGENT" @click="handleClickMenu(USER_AGENT)" v-if="$validate('m8')">
          代理商管理
        </el-menu-item>
        <el-menu-item :index="USER_LOWERS" @click="handleClickMenu(USER_LOWERS)" v-if="$validate('m9')">
          查看下级裂变数
        </el-menu-item>
      </el-submenu>
      <el-submenu :index="OPERATION" v-if="$validate(['m10','m11','m12','m13','m14','m33'])">
        <template slot="title">
          <i class="iconfont icon-ic-backstage-1" />
          <span>发现</span>
        </template>
        <el-menu-item :index="OPERATION_ARTICLE" @click="handleClickMenu(OPERATION_ARTICLE)" v-if="$validate('m10')">
          内容管理
        </el-menu-item>
        <el-menu-item :index="OPERATION_ALBUM" @click="handleClickMenu(OPERATION_ALBUM)" v-if="$validate('m11')">
          专辑管理
        </el-menu-item>
        <el-menu-item :index="OPERATION_COLUMN" @click="handleClickMenu(OPERATION_COLUMN)" v-if="$validate('m12')">
          专栏管理
        </el-menu-item>
        <el-menu-item :index="OPERATION_COMMENTS" @click="handleClickMenu(OPERATION_COMMENTS)" v-if="$validate('m13')">
          评论管理
        </el-menu-item>
        <el-menu-item :index="OPERATION_CATEGORY" @click="handleClickMenu(OPERATION_CATEGORY)" v-if="$validate('m14')">
          分类管理
        </el-menu-item>
        <el-menu-item :index="OPERATION_INTERLOCUTION" @click="handleClickMenu(OPERATION_INTERLOCUTION)" v-if="$validate('m33')">
          问答管理
        </el-menu-item>
      </el-submenu>
      <el-submenu :index="SELF_TEST" v-if="$validate(['m15','m16','m34','m35'])">
        <template slot="title">
          <i class="iconfont icon-ic-backstage-8" />
          <span>自测题管理</span>
        </template>
        <el-menu-item :index="SELF_TEST_LIST" @click="handleClickMenu(SELF_TEST_LIST)" v-if="$validate('m15')">
          自测题列表
        </el-menu-item>
        <el-menu-item :index="SELF_TEST_ADD" @click="handleClickMenu(SELF_TEST_ADD)" v-if="$validate('m16')">
          新增自测题
        </el-menu-item>
        <el-menu-item :index="SELF_TEST_SET_TYPE" @click="handleClickMenu(SELF_TEST_SET_TYPE)" v-if="$validate('m34')">
          设置题型
        </el-menu-item>
        <el-menu-item :index="SELF_TEST_SET_TEMPLATE" @click="handleClickMenu(SELF_TEST_SET_TEMPLATE)" v-if="$validate('m35')">
          设置前端显示
        </el-menu-item>
        <!-- <el-menu-item :index="SELF_TEST_STATISTICS" @click="handleClickMenu(SELF_TEST_STATISTICS)" v-if="$validate('m35')">
          自测题统计列表
        </el-menu-item> -->
      </el-submenu>
      <el-submenu :index="SOLUTION" v-if="$validate(['m36','m37','m38','m39'])">
        <template slot="title">
          <i class="iconfont icon-ic-backstage-7" />
          <span>解决方案</span>
        </template>
        <el-menu-item :index="SOLUTION_ADD" @click="handleClickMenu(SOLUTION_ADD)" v-if="$validate('m36')">
          新增方案
        </el-menu-item>
        <el-menu-item :index="SOLUTION_LIST" @click="handleClickMenu(SOLUTION_LIST)" v-if="$validate('m37')">
          方案列表
        </el-menu-item>
        <el-menu-item :index="SOLUTION_FEEDBACK" @click="handleClickMenu(SOLUTION_FEEDBACK)" v-if="$validate('m38')">
          方案反馈
        </el-menu-item>
        <el-menu-item :index="SOLUTION_SETTING" @click="handleClickMenu(SOLUTION_SETTING)" v-if="$validate('m39')">
          方案配置
        </el-menu-item>
      </el-submenu>
      <el-submenu :index="MARKET" v-if="$validate('m17')">
        <template slot="title">
          <i class="iconfont icon-ic-backstage-5" />
          <span>营销</span>
        </template>
        <el-menu-item :index="MARKET_ENTERPRISE_AUDIT" @click="handleClickMenu(MARKET_ENTERPRISE_AUDIT)" v-if="$validate('m17')">
          企业认证审核
        </el-menu-item>
      </el-submenu>
      <el-submenu :index="PUSH" v-if="$validate(['m18','m19'])">
        <template slot="title">
          <i class="iconfont icon-ic-backstage-3" />
          <span>推送</span>
        </template>
        <el-menu-item :index="PUSH_SCENE" @click="handleClickMenu(PUSH_SCENE)" v-if="$validate('m18')">
          场景管理
        </el-menu-item>
        <el-menu-item :index="PUSH_MANUAL" @click="handleClickMenu(PUSH_MANUAL)" v-if="$validate('m19')">
          手动推送
        </el-menu-item>
      </el-submenu>
      <el-submenu :index="AD" v-if="$validate('m20')">
        <template slot="title">
          <i class="iconfont" />
          <span>广告</span>
        </template>
        <el-menu-item :index="AD_SITE_LIST" @click="handleClickMenu(AD_SITE_LIST)" v-if="$validate('m20')">
          广告位管理
        </el-menu-item>
        <el-menu-item :index="AD_LIST" @click="handleClickMenu(AD_LIST)">
          广告物料管理
        </el-menu-item>
      </el-submenu>
      <el-submenu :index="OPERATION_SETTING" v-if="$validate(['m23','m24'])">
        <template slot="title">
          <i class="iconfont icon-tuisong" />
          <span>运营设置</span>
        </template>
        <el-menu-item :index="OPERATION_SETTING_INTERACTION" @click="handleClickMenu(OPERATION_SETTING_INTERACTION)" v-if="$validate('m23')">
          互动设置
        </el-menu-item>
        <el-menu-item :index="OPERATION_SETTING_KEYWORD" @click="handleClickMenu(OPERATION_SETTING_KEYWORD)" v-if="$validate('m24')">
          关键词
        </el-menu-item>
      </el-submenu>
      <el-submenu :index="SETUP" v-if="$validate(['m21','m22'])">
        <template slot="title">
          <i class="iconfont icon-tuisong" />
          <span>系统设置</span>
        </template>
        <el-menu-item :index="SETUP_ROLE" @click="handleClickMenu(SETUP_ROLE)" v-if="$validate('m21')">
          角色管理
        </el-menu-item>
        <el-menu-item :index="SETUP_ACCOUNT" @click="handleClickMenu(SETUP_ACCOUNT)" v-if="$validate('m22')">
          账号管理
        </el-menu-item>
      </el-submenu>
      <el-submenu :index="ORDER">
        <template slot="title">
          <!-- <i class="iconfont icon-tuisong" /> -->
          <span>售后单</span>
        </template>
        <el-menu-item :index="RETURN" @click="handleClickMenu(RETURN)">
          退货单
        </el-menu-item>
        <el-menu-item :index="REFUND" @click="handleClickMenu(REFUND)">
          退款单
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import menus, {
  HOME,
  PRODUCT,
  PRODUCT_CLASSIFICATION,
  PRODUCT_CHARACTERISTIC,
  PRODUCT_MANAGE,
  PRODUCT_ORDINARYORDER,
  PRODUCT_SERVICEORDER,
  PRODUCT_REVIEW,
  PRODUCT_STORES,
  COUPON,
  COUPON_LIST,
  FINANCE,
  FINANCE_PUBLIC,
  FINANCE_PRIVATE,
  FINANCE_BILLS_LIST,
  FINANCE_WALLET,
  FINANCE_BILLS_STATISTICS,
  FINANCE_QUERYBANKROLL,
  FINANCE_REBATE_LIST,
  FINANCE_REBATE_STATISTICS,
  USER,
  USER_LIST,
  USER_DETAIL,
  USER_AGENT,
  USER_LOWERS,
  OPERATION,
  OPERATION_ARTICLE,
  OPERATION_ALBUM,
  OPERATION_CATEGORY,
  OPERATION_COLUMN,
  OPERATION_COMMENTS,
  OPERATION_SETTING,
  OPERATION_SETTING_INTERACTION,
  OPERATION_SETTING_KEYWORD,
  OPERATION_BROADCAST,
  OPERATION_INTERLOCUTION,
  SELF_TEST,
  SELF_TEST_LIST,
  SELF_TEST_ADD,
  SELF_TEST_SET_TYPE,
  SELF_TEST_SET_SOLUTION,
  SELF_TEST_SET_TEMPLATE,
  SELF_TEST_STATISTICS,
  MARKET,
  MARKET_ENTERPRISE_AUDIT,
  PUSH,
  PUSH_SCENE,
  PUSH_MANUAL,
  KNOWLEDGE_PSYCHOLOGY,
  KNOWLEDGE,
  KNOWLEDGE_NUTRITION,
  KNOWLEDGE_SPORT,
  SOLUTION,
  SOLUTION_ADD,
  SOLUTION_DETAIL,
  SOLUTION_EDIT,
  SOLUTION_LIST,
  SOLUTION_FEEDBACK,
  SOLUTION_SETTING,
  SETUP,
  SETUP_ROLE,
  SETUP_ACCOUNT,
  AD,
  AD_SITE_LIST,
  AD_LIST,
  AD_EDIT,
  AD_ADD,
  BILL,
  BILL_RECHARGE_LIST,
  BILL_CONSUME_LIST,
  BILL_WITHDRAWAL_LIST,
  BILL_REWARD_LIST,
  SALESCHECK,
  ORDER,
  RETURN,
  REFUND
} from '../../common/js/menus';
import { OPEN_TAB } from '../../common/js/events';

export default {
  props: {
    onClickMenu: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      HOME,
      PRODUCT,
      PRODUCT_CLASSIFICATION,
      PRODUCT_CHARACTERISTIC,
      PRODUCT_MANAGE,
      PRODUCT_ORDINARYORDER,
      PRODUCT_SERVICEORDER,
      PRODUCT_REVIEW,
      PRODUCT_STORES,
      COUPON,
      COUPON_LIST,
      FINANCE,
      FINANCE_PUBLIC,
      FINANCE_PRIVATE,
      FINANCE_BILLS_LIST,
      FINANCE_BILLS_STATISTICS,
      FINANCE_WALLET,
      FINANCE_QUERYBANKROLL,
      FINANCE_REBATE_LIST,
      FINANCE_REBATE_STATISTICS,
      SELF_TEST_STATISTICS,
      USER,
      USER_LIST,
      USER_DETAIL,
      USER_AGENT,
      USER_LOWERS,
      OPERATION,
      OPERATION_ARTICLE,
      OPERATION_ALBUM,
      OPERATION_CATEGORY,
      OPERATION_COLUMN,
      OPERATION_COMMENTS,
      OPERATION_SETTING,
      OPERATION_SETTING_INTERACTION,
      OPERATION_SETTING_KEYWORD,
      OPERATION_BROADCAST,
      OPERATION_INTERLOCUTION,
      SELF_TEST,
      SELF_TEST_LIST,
      SELF_TEST_ADD,
      SELF_TEST_SET_TYPE,
      SELF_TEST_SET_SOLUTION,
      SELF_TEST_SET_TEMPLATE,
      MARKET,
      MARKET_ENTERPRISE_AUDIT,
      PUSH,
      PUSH_SCENE,
      PUSH_MANUAL,
      KNOWLEDGE_PSYCHOLOGY,
      KNOWLEDGE,
      KNOWLEDGE_NUTRITION,
      KNOWLEDGE_SPORT,
      SOLUTION,
      SOLUTION_ADD,
      SOLUTION_DETAIL,
      SOLUTION_EDIT,
      SOLUTION_LIST,
      SOLUTION_FEEDBACK,
      SOLUTION_SETTING,
      SETUP,
      SETUP_ROLE,
      SETUP_ACCOUNT,
      AD,
      AD_SITE_LIST,
      AD_LIST,
      AD_EDIT,
      AD_ADD,
      BILL,
      BILL_RECHARGE_LIST,
      BILL_CONSUME_LIST,
      BILL_WITHDRAWAL_LIST,
      BILL_REWARD_LIST,
      SALESCHECK,
      ORDER,
      RETURN,
      REFUND,
      defaultActive: HOME
    };
  },
  name: 'Aside',
  mounted() {
    this.$subscribe(OPEN_TAB, params => {
      const menuName = params.shift();
      this.handleClickMenu(menuName, params);
      this.defaultActive = menuName;
    });
  },
  methods: {
    handleClickMenu(menuName, params) {
      let menu = menus[menuName];
      if (typeof menu === 'function') {
        menu = menu(...params);
      }
      this.onClickMenu(menu);
    },
    activeMenu(menuName) {
      this.defaultActive = menuName;
    }
  }
};
</script>

<style>
.asider {
  height: 100%;
  position: absolute;
  left: 0;
  width: 240px;
  background-color: #f3f7ff;
}
.logo {
  height: 66px;
  line-height: 66px;
  background-position: 20px 50%;
  font-size: 13px;
  color: #585858;
  text-align: center;
  padding-right: 20px;
}
.main-menu {
  height: calc(100% - 66px);
  overflow: auto;
}
</style>
