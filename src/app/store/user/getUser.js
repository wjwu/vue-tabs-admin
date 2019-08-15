import axios from '../../utils/axios';
import helper from '../../utils/storeHelper';

export default {
  state: {
    getUser: {
      data: null,
      loading: false
    }
  },
  mutations: {
    requestGetUser(state) {
      state.getUser.loading = true;
    },
    successGetUser(state, data) {
      state.getUser.data = data;
      state.getUser.loading = false;
    },
    failureGetUser(state) {
      state.getUser.loading = false;
    }
  },
  actions: {
    getUser({ commit }, userId) {
      return helper.actionWrapper(
        commit,
        async () => {
          commit('requestGetUser');
          const response = await axios.get('/member/getUserChangtUser', {
            params: {
              userId
            }
          });
          commit('successGetUser', response.data);
        },
        () => {
          commit('failureGetUser');
        }
      );
    }
  }
};