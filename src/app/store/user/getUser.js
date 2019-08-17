import axios from '../../utils/axios';
import { mock } from '../../utils/mock';
import { actionWrapper } from '../helper';
import { users } from './mockData';

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
      return actionWrapper(
        commit,
        async () => {
          commit('requestGetUser');
          const response = await mock(users.filter(user => user.userId === userId)[0]);
          commit('successGetUser', response);
          // const response = await axios.get(`/user/${userId}`);
          // commit('successGetUser', response.data);
        },
        () => {
          commit('failureGetUser');
        }
      );
    }
  }
};