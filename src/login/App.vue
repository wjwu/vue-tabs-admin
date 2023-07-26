<template>
  <div class="container">
    <div class="login-box">
      <h1>XXssX</h1>
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
      <el-alert
        v-show="error"
        class="alert-error"
        :title="error"
        type="error"
        :closable="false"
      />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';

import session from '../common/js/session';

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
const error = ref('');

const loginFormRef = ref();

const handleLogin = () => {
  loginFormRef.value.validate(async valid => {
    if (!valid) {
      return;
    }
    error.value = '';
    loading.value = true;
    const { data } = await axios.post(`${process.env.API_HOST}/login`, {
      userName: loginForm.userName.trim(),
      passWord: loginForm.password.trim(),
    });
    loading.value = false;
    if (data) {
      session.setString('token', data.token);
      session.setObject('operator', data.operator);
      window.location.href = './app.html';
    }
  });
};
</script>

<style lang="scss">
html,
body,
#app,
.container {
  height: 100%;
  width: 100%;
}

.container {
  position: relative;
  background: url('./assets/images/login_bg.jpg') no-repeat;
  background-size: cover;

  .login-box {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    width: 900px;
    height: 560px;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 187px 0 rgba(49, 49, 50, 0.36);
    border-radius: 5px;
  }

  h1 {
    position: absolute;
    top: 50px;
  }

  .login-form {
    width: 300px;

    .btn-login {
      width: 100%;
    }
  }

  .alert-error {
    position: absolute;
    bottom: 30px;
    width: 300px;
    overflow: hidden;
  }
}
</style>
