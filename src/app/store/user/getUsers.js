import axios from '../../utils/axios';
import helper from '../../utils/storeHelper';
import { mock } from '../../utils/mock';

export default {
  state: {
    getUsers: {
      data: [],
      total: 15,
      loading: false
    }
  },
  mutations: {
    requestGetUsers(state) {
      state.getUsers.loading = true;
    },
    successGetUsers(state, data) {
      state.getUsers.data = data;
      state.getUsers.loading = false;
    },
    failureGetUsers(state) {
      state.getUsers.loading = false;
    }
  },
  actions: {
    getUsers({ commit }, params) {
      return helper.actionWrapper(
        commit,
        async () => {
          commit('requestGetUsers');
          const response = await mock([{
            userId: '0001',
            realName: '张一',
            nickName: '张一一',
            phone: '',
            freeze: false
          }]);
          // const response = await axios.get('/member/getUserChangeUsers', {
          //   params: {
          //     ...params
          //   }
          // });
          // commit('successGetUsers', response.data);
          commit('successGetUsers', response);
        },
        () => {
          commit('failureGetUsers');
        }
      );
    }
  }
};