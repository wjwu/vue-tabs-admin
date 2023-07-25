<template>
  <div class="app-wrapper">
    <router-view />
    <div v-show="false">
      {{ `${notifySuccess}${notifyWarning}${notifyInfo}${notifyError}` }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    notifySuccess() {
      const notify = this.$store.state.global.notifySuccess;
      if (notify.message) {
        this.$message.success({
          duration: 5000,
          message: notify.message
        });
      }
      return '';
    },
    notifyWarning() {
      const notify = this.$store.state.global.notifyWarning;
      if (notify.message) {
        this.$message.warning({
          duration: 5000,
          message: notify.message
        });
      }
      return '';
    },
    notifyInfo() {
      const notify = this.$store.state.global.notifyInfo;
      if (notify.message) {
        this.$message.info({
          duration: 5000,
          message: notify.message
        });
      }
      return '';
    },
    notifyError() {
      const notify = this.$store.state.global.notifyError;
      if (notify.message) {
        this.$message.error({
          duration: 5000,
          message: notify.message
        });
      }
      return '';
    }
  }
};
</script>

<style lang="scss">
html,
body {
  background-color: #fff;
}
.app-wrapper {
  padding: 30px;
}
</style>


