<template>
  <el-form v-loading="loading" label-width="120px" size="medium">
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
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState('user', {
    user: state => state.getUser.data,
    loading: state => state.getUser.loading
  }),
  mounted() {
    this.getUser(this.$route.params.id);
  },
  methods: {
    ...mapActions('user', ['getUser'])
  }
};
</script>