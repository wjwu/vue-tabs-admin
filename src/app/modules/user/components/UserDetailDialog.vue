<template>
  <d-dialog
    :tabs="tabs"
    title="用户详情"
    :visible="visible"
    :before-close="handleClose"
    top="6vh"
  >
    <el-form label-width="120px" size="medium">
      <el-form-item label="用户ID：">
        <div v-if="user">{{ user.userId }}</div>
      </el-form-item>
      <el-form-item label="真实姓名：">
        <div v-if="user">{{ user.realName }}</div>
      </el-form-item>
      <el-form-item label="昵称：">
        <div v-if="user">{{ user.nickName }}</div>
      </el-form-item>
      <el-form-item label="手机号：">
        <div v-if="user">{{ user.phone }}</div>
      </el-form-item>
      <el-form-item label="状态：">
        <div v-if="user">{{ user.status | userStatus }}</div>
      </el-form-item>
    </el-form>
  </d-dialog>
</template>

<script>
import DDialog from '../../../components/Dialog';
import { USER_LIST } from '../../../../common/js/menus';

export default {
  components: {
    DDialog
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    user: {
      type: Object
    }
  },
  data() {
    return {
      tabs: [USER_LIST]
    };
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false);
    }
  }
};
</script>