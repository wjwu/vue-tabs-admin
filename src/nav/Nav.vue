<template>
  <div v-if="isShowApp" class="main" @click="handleHiddenContextMenu">
    <div class="main-wrapper">
      <aside-bar ref="asideBar" :onClickMenu="handClickMenu" />
      <header-nav/>
      <div class="main-cnt">
        <div class="tabs">
          <div class="tabs-head-wrapper">
            <ul class="tabs-head clearfix">
              <li @mouseover="mouseOverTabIndex = i" @mouseout="mouseOverTabIndex = null" @contextmenu.prevent="handleShowContextMenu($event,tab)" @selectstart.prevent="handlePreventSelect" :class="{'not-active':!tab.isActive}" v-for="(tab,i) in openTabs" :key="tab.name">
                <a @click="handClickTab(tab)" href="javascript:;" :title="tab.title">{{tab.title}}</a>
                <span v-show="tab.isActive || (!tab.isActive && mouseOverTabIndex === i)" class="close" @click="handleCloseTab(tab)"></span>
              </li>
            </ul>
          </div>
          <div class="tab-panel" v-show="tab.isActive" v-for="tab in openTabs" :key="tab.name" v-loading="tab.loading" element-loading-background="#fff">
            <iframe :src="`./#${tab.path}`" @load="handleLoadFrame($event,tab)"></iframe>
          </div>
        </div>
      </div>
    </div>
    <ul id="main-context-menu" class="el-dropdown-menu el-popper" v-show="isShowContextMenu">
      <li class="el-dropdown-menu__item" @click="handleClickContextMenu('close')">关闭</li>
      <li class="el-dropdown-menu__item" @click="handleClickContextMenu('closeLeft')" v-if="isShowCloseLeftTab">关闭左侧所有</li>
      <li class="el-dropdown-menu__item" @click="handleClickContextMenu('closeRight')" v-if="isShowCloseRightTab">关闭右侧所有</li>
      <li class="el-dropdown-menu__item" @click="handleClickContextMenu('closeAll')">关闭所有</li>
    </ul>
  </div>
</template>

<script>
import session from '../common/js/session';
import HeaderNav from './components/header-nav.vue';
import AsideBar from './components/aside-bar.vue';
import { CLOSE_TAB, CLOSE_TAB_FROM_IFRAME } from '../common/js/events';
import menus, { HOME } from '../common/js/menus';

const home = menus[HOME];

export default {
  data() {
    return {
      isShowApp: false,
      openTabs: [{ ...home }],
      isShowContextMenu: false,
      isShowCloseLeftTab: false,
      isShowCloseRightTab: false,
      mouseOverTabIndex: null,
      openContextMenuTab: null
    };
  },
  components: {
    HeaderNav,
    AsideBar
  },
  created() {
    if (!session.getString('token')) {
      window.location.href = './login.html';
    } else {
      this.isShowApp = true;
    }
  },
  mounted() {
    if (!this.isShowApp) {
      return;
    }
    const _this = this;
    this.$subscribe(CLOSE_TAB_FROM_IFRAME, params => {
      const tabName = params.shift();
      for (let opened of _this.openTabs) {
        if (opened.name === tabName) {
          _this.handleCloseTab(opened);
          break;
        }
      }
    });
    this.$nextTick(() => {
      const tabs = document.querySelector('.tabs');
      tabs.style.height = `${tabs.parentElement.clientHeight - 8}px`;
    });
  },
  methods: {
    handleMouseOver() {},
    handleShowContextMenu(e, tab) {
      if (e.button === 2) {
        if (this.openTabs.length === 1 && this.openTabs[0].name === HOME) {
          return;
        }
        this.openContextMenuTab = tab;
        this.isShowCloseLeftTab = this.openTabs[0].name !== tab.name;
        this.isShowCloseRightTab =
          this.openTabs[this.openTabs.length - 1].name !== tab.name;
        const contextMenu = document.querySelector('#main-context-menu');
        contextMenu.style.left = `${e.clientX + 5}px`;
        contextMenu.style.top = `${e.clientY + 5}px`;
        this.isShowContextMenu = true;
      }
    },
    handleHiddenContextMenu(e) {
      if (!e.srcElement.id || e.srcElement.id !== 'main-context-menu') {
        this.isShowContextMenu = false;
      }
    },
    handlePreventSelect() {
      return false;
    },
    handleLoadFrame(e, tab) {
      const frameDocument = e.srcElement.contentDocument;
      frameDocument.addEventListener('click', this.handleHiddenContextMenu);
      setTimeout(() => {
        tab.loading = false;
      }, 200);
    },
    handleClickContextMenu(command) {
      const idx = this.openTabs.indexOf(this.openContextMenuTab);
      if (command === 'close') {
        this.handleCloseTab(this.openContextMenuTab);
      } else if (command === 'closeLeft') {
        this.openTabs.splice(0, idx);
        let activeIdx;
        for (let i = 0; i < this.openTabs.length; i++) {
          if (this.openTabs[i].isActive) {
            activeIdx = i;
            break;
          }
        }

        if (!activeIdx && activeIdx !== 0) {
          // 关闭
          this.openTabs[0].isActive = true;
          this.$refs.asideBar.activeMenu(this.openTabs[0].name);
        }
      } else if (command === 'closeRight') {
        this.openTabs.splice(idx + 1, this.openTabs.length - idx - 1);
        let activeIdx;
        for (let i = 0; i < this.openTabs.length; i++) {
          if (this.openTabs[i].isActive) {
            activeIdx = i;
            break;
          }
        }

        if (!activeIdx && activeIdx !== 0) {
          // 关闭
          this.openTabs[this.openTabs.length - 1].isActive = true;
          this.$refs.asideBar.activeMenu(
            this.openTabs[this.openTabs.length - 1].name
          );
        }
      } else if (command === 'closeAll') {
        let tmp = [];
        for (let opened of this.openTabs) {
          if (opened.name === HOME) {
            opened.isActive = true;
            tmp.push(opened);
          }
        }
        if (tmp.length === 0) {
          this.openTabs = [{ ...home }];
        } else {
          this.openTabs = tmp;
        }
        this.$refs.asideBar.activeMenu(HOME);
      }
    },
    handClickMenu(tab) {
      // 打开新的选项卡

      let exists = false;
      for (let opened of this.openTabs) {
        if (opened.name === tab.name) {
          exists = true;
          opened.isActive = true;
          this.$refs.asideBar.activeMenu(opened.name);
        } else {
          opened.isActive = false;
        }
      }
      if (!exists) {
        this.openTabs.push({ ...tab, isActive: true, loading: true });
        this.$nextTick(() => {
          this.$refs.asideBar.activeMenu(tab.name);
        });
      }
    },
    handClickTab(tab) {
      for (let opened of this.openTabs) {
        if (opened.name === tab.name) {
          opened.isActive = true;
          this.$refs.asideBar.activeMenu(tab.name);
        } else {
          opened.isActive = false;
        }
      }
    },
    handleCloseTab(tab) {
      if (this.openTabs.length === 1) {
        // 只有一个TAB 或者是HOME TAB
        if (tab.name === HOME) {
          return;
        }
        const idx = this.openTabs.indexOf(tab);
        this.$publish(CLOSE_TAB, tab.name);
        this.openTabs.splice(idx, 1);
        this.openTabs.push({ ...home });
        this.$refs.asideBar.activeMenu(home.name);
      } else {
        const idx = this.openTabs.indexOf(tab);
        this.$publish(CLOSE_TAB, tab.name);
        this.openTabs.splice(idx, 1);
        let hasActive;
        for (let opened of this.openTabs) {
          if (opened.isActive) {
            hasActive = true;
            break;
          }
        }
        if (!hasActive) {
          let willOpenTab;
          if (this.openTabs.length === 1) {
            willOpenTab = this.openTabs[0];
          } else if (idx === this.openTabs.length) {
            willOpenTab = this.openTabs[idx - 1];
          } else {
            willOpenTab = this.openTabs[idx];
          }
          willOpenTab.isActive = true;
          this.$refs.asideBar.activeMenu(willOpenTab.name);
        }
      }
    }
  }
};
</script>

<style lang="scss" scope>
html,
body,
.main {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.main-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.main-cnt {
  margin-left: 240px;
  flex: 1 1 auto;
  padding-top: 8px;
  background: #e7e9ea;
  box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.17);
  z-index: 1;

  .tabs {
    .tabs-head-wrapper {
      border-bottom: 1px solid #e4e7ed;
    }

    .tabs-head {
      margin-bottom: -1px;
      list-style: none;

      .not-active {
        background: #e7e9ea;
        a {
          color: #555;
          cursor: pointer;

          &:hover {
            color: #5062c1;
          }
        }
      }

      li {
        position: relative;
        float: left;
        max-width: 140px;
        height: 30px;
        font-size: 12px;
        background: #fff;
        border-radius: 3px 3px 0 0;

        a {
          display: inline-block;
          max-width: 140px;
          padding: 0 25px;
          height: 30px;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #5062c1;
          cursor: default;
        }

        .close {
          position: absolute;
          top: 8px;
          right: 7px;
          display: inline-block;
          width: 14px;
          height: 14px;
          background: url('./assets/images/icon_close.png') no-repeat 50% 50%;
          cursor: pointer;
        }
      }
    }
    .tab-panel {
      width: 100%;
      height: calc(100% - 33px);
      background-color: #fff;
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  }
}
</style>

