export default {
  async actionWrapper(
    commit,
    execFunc,
    failFunc = null,
    showGlobalError = true
  ) {
    try {
      return await execFunc();
    } catch (e) {
      if (!e.response) {
        if (failFunc) {
          failFunc();
        }
        commit('global/notifyError', '服务请求失败，请联系管理员', {
          root: true
        });
      } else {
        const msg = e.response.data.message || '操作失败，请稍后重试';
        if (failFunc) {
          failFunc(msg);
        }
        if (showGlobalError) {
          commit('global/notifyError', msg, { root: true });
        }
      }
      throw e;
    }
  }
};
