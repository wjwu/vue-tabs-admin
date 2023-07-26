<template>
  <div class="main">
    <el-alert
      v-if="showError"
      title="服务请求失败，请联系管理员"
      type="error"
      :closable="false"
    />
    <h1>登录</h1>
    <el-form
      ref="loginFormRef"
      class="login-form"
      :rules="rules"
      :model="loginForm"
    >
      <el-form-item label="账号" prop="userName">
        <el-input v-model="loginForm.userName" placeholder="请输入你的账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="请输入你的密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="btn-login"
          :loading="loading"
          @click="handleLogin"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core';
import axios from 'axios';
import { reactive, ref } from 'vue';

const loginForm = reactive({
  userName: '',
  password: '',
});

const rules = reactive({
  userName: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'change',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change',
    },
  ],
});

const loading = ref(false);
const showError = ref(false);
const loginFormRef = ref();

const handleLogin = () => {
  loginFormRef.value.validate(async valid => {
    if (!valid) {
      return;
    }
    showError.value = false;
    loading.value = true;
    try {
      const { data } = await axios.get(`${process.env.API_HOST}/users/1`, {
        userName: loginForm.userName.trim(),
        passWord: loginForm.password.trim(),
      });
      loading.value = false;
      if (data) {
        useStorage('token', '1111', sessionStorage);
        useStorage('operator', data, sessionStorage);
        window.location.href = '/app.html';
      }
    } catch (error) {
      loading.value = false;
      showError.value = true;
    }
  });
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
}

.main {
  margin: 200px auto;
  width: 600px;
  height: 400px;
  border: 1px solid #ebeef5;
  border-radius: 5px;
}

h1 {
  margin: 50px;
  text-align: center;
}

.login-form {
  width: 300px;
  margin: 0 auto;

  .btn-login {
    width: 100%;
  }
}
</style>
