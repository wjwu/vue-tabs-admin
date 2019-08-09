export default {
  namespaced: true,
  state: {
    notifySuccess: {
      message: ''
    },
    notifyWarning: {
      message: ''
    },
    notifyInfo: {
      message: ''
    },
    notifyError: {
      message: ''
    }
  },
  actions: {
    notifySuccess({ commit }, message) {
      commit('notifySuccess', message);
    },
    notifyWarning({ commit }, message) {
      commit('notifyWarning', message);
    },
    notifyInfo({ commit }, message) {
      commit('notifyInfo', message);
    },
    notifyError({ commit }, message) {
      commit('notifyError', message);
    }
  },
  mutations: {
    notifySuccess(state, message) {
      state.notifySuccess = { message };
    },
    notifyWarning(state, message) {
      state.notifyWarning = { message };
    },
    notifyInfo(state, message) {
      state.notifyInfo = { message };
    },
    notifyError(state, message) {
      state.notifyError = { message };
    }
  }
};
