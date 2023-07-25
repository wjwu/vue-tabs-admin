<template>
  <div v-if="isShowApp" class="main" @click="handleHiddenContextMenu">
    <div class="main-wrapper">
      <Asider ref="asideBar" @click="handClickMenu" />
      <HeaderNav />
      <div class="main-cnt">
        <div class="tabs">
          <ul class="tabs-head">
            <li
              v-for="(tab,i) in openTabs"
              :key="tab.name"
              :class="{'not-active':!tab.isActive}"
              @mouseover="mouseOverTabIndex = i"
              @mouseout="mouseOverTabIndex = null"
              @contextmenu.prevent="handleShowContextMenu($event,tab)"
              @selectstart.prevent="handlePreventSelect"
            >
              <a href="javascript:;" :title="tab.title" @click="handClickTab(tab)">{{ tab.title }}</a>
              <span
                v-show="tab.isActive || (!tab.isActive && mouseOverTabIndex === i)"
                class="close"
                @click="handleCloseTab(tab)"
              />
            </li>
          </ul>
          <div
            v-for="tab in openTabs"
            v-show="tab.isActive"
            :key="tab.name"
            v-loading="tab.loading"
            class="tab-panel"
            element-loading-background="#fff"
          >
            <iframe :src="`./#${tab.path}`" @load="handleLoadFrame($event,tab)" />
          </div>
        </div>
      </div>
    </div>
    <ul v-show="isShowContextMenu" id="main-context-menu" class="el-dropdown-menu el-popper">
      <li class="el-dropdown-menu__item" @click="handleClickContextMenu('close')">
        关闭
      </li>
      <li
        v-if="isShowCloseLeftTab"
        class="el-dropdown-menu__item"
        @click="handleClickContextMenu('closeLeft')"
      >
        关闭左侧所有
      </li>
      <li
        v-if="isShowCloseRightTab"
        class="el-dropdown-menu__item"
        @click="handleClickContextMenu('closeRight')"
      >
        关闭右侧所有
      </li>
      <li class="el-dropdown-menu__item" @click="handleClickContextMenu('closeAll')">
        关闭所有
      </li>
    </ul>
  </div>
</template>

<script>
import { CLOSE_TAB, CLOSE_TAB_FROM_IFRAME } from '../common/js/events';
import menus, { HOME } from '../common/js/menus';
import session from '../common/js/session';
import Asider from './components/Asider';
import HeaderNav from './components/Header';

const home = menus[HOME];

export default {
  components: {
    HeaderNav,
    Asider
  },
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
  created() {
    if (
      !session.getString('token') &&
      process.env['NODE_ENV'] !== 'development'
    ) {
      window.location.href = './login.html';
    } else {
      this.isShowApp = true;
    }
    this.isShowApp = true;
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
      tabs.style.height = `${tabs.parentElement.clientHeight - 20}px`;
    });
  },
  methods: {
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

<style lang="scss">
html,
body,
.main,
.main-wrapper {
  height: 100%;
}

.main-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}
.main-cnt {
  margin-left: 240px;
  flex: 1;
  padding: 10px 0 0 10px;
  background: #e5e9f2;

  .tabs {
    .tabs-head {
      display: flex;
      .not-active {
        background: #e4e7ed;
        a {
          color: #303133;
          cursor: pointer;
        }
      }

      li {
        position: relative;
        max-width: 140px;
        height: 30px;
        font-size: 12px;
        background: #fff;
        border-radius: 3px 3px 0 0;

        a {
          display: inline-block;
          max-width: 140px;
          padding: 0 35px 0 25px;
          height: 30px;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #409eff;
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
      height: calc(100% - 20px);
      background-color: #fff;
      iframe {
        display: block;
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  }
}
</style>

