<template>
  <div class="asider">
    <div class="name">XXX管理系统</div>
    <el-menu :default-active="defaultActive" class="main-menu">
      <el-menu-item :index="HOME" @click="handleClickMenu(HOME)">
        <i class="el-icon-s-home" /> 首页
      </el-menu-item>
      <el-submenu :index="USER">
        <template slot="title">
          <i class="el-icon-user-solid" />
          <span>用户</span>
        </template>
        <el-menu-item :index="USER_LIST" @click="handleClickMenu(USER_LIST)">用户列表</el-menu-item>
        <el-menu-item :index="USER_LIST1" @click="handleClickMenu(USER_LIST1)">用户列表1</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import menus, {
  HOME,
  USER,
  USER_LIST,
  USER_LIST1
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
      USER,
      USER_LIST,
      USER_LIST1,
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

<style lang="scss">
.asider {
  height: 100%;
  position: absolute;
  left: 0;
  width: 240px;

  .name {
    height: 60px;
    line-height: 60px;
    background-position: 20px 50%;
    font-size: 13px;
    color: #fff;
    text-align: center;
    padding-right: 20px;
    background-color: #409eff;
  }
  .main-menu {
    height: calc(100% - 66px);
    overflow: auto;
  }
}
</style>
