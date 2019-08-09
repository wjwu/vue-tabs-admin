<template>
  <div class="header">
    <div class="user">
      <!-- <Avatar icon="person" size="large" class="portrait" /> -->
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{username}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="setup">设置</el-dropdown-item>
          <el-dropdown-item command="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <el-dialog title="退出系统" :visible.sync="dialogVisible" width="400px" :append-to-body="true">
      <span>您确实要退出系统？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleExit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import session from '../../common/js/session';

const operator = session.getObject('operator');
if (!operator) {
  window.location.href = './login.html';
}

export default {
  data() {
    return {
      username: operator.name,
      dialogVisible: false
    };
  },
  methods: {
    handleExit() {
      session.clear();
      window.location.href = './login.html';
    },
    handleCommand(type) {
      if (type === 'exit') {
        this.dialogVisible = true;
      }
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  margin-left: 240px;
  height: 66px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.17);
  z-index: 1;
}

.user {
  height: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 100px;
  cursor: pointer;
}
</style>
