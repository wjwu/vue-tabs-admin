<template>
  <div class="container">
    <div class="login-box">
      <h1>XXX管理系统</h1>
      <el-form ref="loginForm" class="login-form" :rules="rules" :model="loginForm">
        <el-form-item label="账号" prop="userName">
          <el-input v-model="loginForm.userName" placeholder="请输入你的账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入你的密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" size="medium" :loading="loading" @click="handleLogin">登录
          </el-button>
        </el-form-item>
      </el-form>
      <el-alert v-show="error" class="alert-error" :title="error" type="error" :closable="false"></el-alert>
    </div>
  </div>
</template>

<script>
import session from '../common/js/session';
import axios from 'axios';

export default {
  data() {
    return {
      loginForm: {
        userName: '',
        password: '',
      },
      rules: {
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
      },
      loading: false,
      error: '',
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate().then(async () => {
        this.error = '';
        this.loading = true;
        try {
          let { data } = await axios.post(`${window.config.apiHost}/login`, {
            userName: this.loginForm.userName.trim(),
            passWord: this.loginForm.password.trim(),
          });
          this.loading = false;
          if (data) {
            session.setString('token', data.token);
            session.setObject('operator', data.operator);
            window.location.href = './app.html';
          }
        } catch (e) {
          this.loading = false;
          if (e.response) {
            this.error = e.response.data.message;
          } else {
            this.error = '服务请求失败，请联系管理员';
          }
          throw e;
        }
      });
    },
  },
};
</script>

<style lang="scss">
html,
body,
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
.el-form-item__label {
  font-size: 18px;
  color: #515f6e;
  font-weight: 600;
}

.el-input__inner {
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  border-radius: 0;
  padding: 0 5px;
}

.el-form-item:last-child {
  padding-top: 20px;
}

.el-form-item.is-required .el-form-item__label:before {
  display: none;
}
</style>
