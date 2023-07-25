import { mock } from '../../utils/mock';
import { actionWrapper } from '../helper';
import { users } from './mockData';

export default {
  state: {
    getUsers: {
      data: [],
      total: 0,
      loading: false
    }
  },
  mutations: {
    requestGetUsers(state) {
      state.getUsers.loading = true;
    },
    successGetUsers(state, data) {
      state.getUsers.data = data.list;
      state.getUsers.total = data.total;
      state.getUsers.loading = false;
    },
    failureGetUsers(state) {
      state.getUsers.loading = false;
    }
  },
  actions: {
    getUsers({ commit }, params) {
      return actionWrapper(
        commit,
        async () => {
          commit('requestGetUsers');
          const start = params.pageSize * (params.pageIndex - 1);
          const end = start + params.pageSize;
          let total = 0;
          let usersData = users;
          if (params.userId) {
            usersData = usersData.filter(user => user.userId.indexOf(params.userId) >= 0);
          }
          else if (params.realName) {
            usersData = usersData.filter(user => user.realName.indexOf(params.realName) >= 0);
          }
          else if (params.nickName) {
            usersData = usersData.filter(user => user.nickName.indexOf(params.nickName) >= 0);
          }
          else if (params.phone) {
            usersData = usersData.filter(user => user.phone.indexOf(params.phone) >= 0);
          }
          else if (params.status) {
            usersData = usersData.filter(user => user.status.toString() === params.status);
          }
          total = usersData.length;
          usersData = usersData.slice(start, end);
          const data = await mock(usersData, 1000);
          // const response = await axios.get('/users', {
          //   params: {
          //     ...params
          //   }
          // });
          // commit('successGetUsers', response.data);
          commit('successGetUsers', { list: data, total });
        },
        () => {
          commit('failureGetUsers');
        }
      );
    }
  }
};