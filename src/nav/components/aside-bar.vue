<template>
  <div class="asider">
    <div class="logo">XXX管理系统</div>
    <el-menu :default-active="defaultActive" class="main-menu">
      <el-menu-item :index="HOME" @click="handleClickMenu(HOME)">
        <i class="el-icon-s-home" /> 首页
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import menus, { HOME } from '../../common/js/menus';
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
      defaultActive: HOME
    };
  },
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
