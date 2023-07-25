<template>
  <div class="asider">
    <div class="name">
      XXX管理系统
    </div>
    <el-menu :default-active="defaultActive" class="main-menu">
      <el-menu-item :index="HOME" @click="handleClickMenu(HOME)">
        <i class="el-icon-s-home" /> 首页
      </el-menu-item>
      <el-submenu :index="USER">
        <template slot="title">
          <i class="el-icon-user-solid" />
          <span>用户</span>
        </template>
        <el-menu-item :index="USER_LIST" @click="handleClickMenu(USER_LIST)">
          用户列表
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { OPEN_TAB } from '../../common/js/events';
import menus, { HOME, USER, USER_LIST } from '../../common/js/menus';

export default {
  data() {
    return {
      HOME,
      USER,
      USER_LIST,
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
      this.$emit('click', menu);
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
  display: flex;
  flex-direction: column;
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
    flex: 1;
    overflow: auto;
  }
}
</style>
