<template>
  <div class="container">
    <div class="login-box">
      <el-form class="login-form" :rules="rules" :model="loginForm" ref="loginForm">
        <el-form-item label="账号" prop="userName">
          <el-input v-model="loginForm.userName" placeholder="请输入你的账号">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入你的密码">
          </el-input>
        </el-form-item>
        <el-form-item style="padding-top:20px">
          <el-button type="primary" class="btn-login" size="medium" :loading="loading" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
      <el-alert class="alert-error" v-if="error" :title="error" type="error" :closable="false" style="line-height:0">
      </el-alert>
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
        supplier: ''
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'change'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'change'
          }
        ]
      },
      loading: false,
      suppliers: [],
      peopleId: null,
      error: null
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate().then(async () => {
        this.loading = true;
        try {
          let response = await axios.post(`${window.config.apiHost}/login`, {
            userName: this.loginForm.userName.trim(),
            passWord: this.loginForm.password.trim()
          });
          this.loading = false;
          if (response) {
            session.setString('token', response.data.token);
            session.setObject('operator', response.data.operatorInfo);
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
    }
  }
};
</script>

<style lang="scss">
html,
body,
.container {
  height: 100%;
  width: 100%;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  background: url('./assets/images/login_bg.jpg') no-repeat;
  background-size: cover;

  .login-box {
    position: relative;
    width: 933px;
    height: 600px;
    box-shadow: 0 0 187px 0 rgba(49, 49, 50, 0.36);
    border-radius: 5px;
    background: url('./assets/images/ic_login.png') no-repeat -99px -99px;

    .login-form {
      position: absolute;
      right: 30px;
      top: 170px;
      width: 340px;
    }
  }

  .btn-login {
    width: 105px;
    height: 40px;
    border-radius: 2px;
    font-size: 16px;
  }

  .alert-error {
    position: absolute;
    width: 340px;
    right: 30px;
    bottom: 22px;
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
.el-form-item.is-required .el-form-item__label:before {
  display: none;
}
</style>
