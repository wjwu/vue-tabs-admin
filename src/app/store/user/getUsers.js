import axios from '../../utils/axios';
import { mock } from '../../utils/mock';
import { actionWrapper } from '../helper';

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
      return actionWrapper(
        commit,
        async () => {
          commit('requestGetUsers');
          const response = await mock([{
            userId: '0001',
            realName: '张一',
            nickName: '张一一',
            phone: '13412345678',
            freeze: false
          }, {
            userId: '0001',
            realName: '张一',
            nickName: '张一一',
            phone: '13412345678',
            freeze: false
          }, {
            userId: '0001',
            realName: '张一',
            nickName: '张一一',
            phone: '13412345678',
            freeze: false
          }, {
            userId: '0001',
            realName: '张一',
            nickName: '张一一',
            phone: '13412345678',
            freeze: false
          }, {
            userId: '0001',
            realName: '张一',
            nickName: '张一一',
            phone: '13412345678',
            freeze: false
          }, {
            userId: '0001',
            realName: '张一',
            nickName: '张一一',
            phone: '13412345678',
            freeze: false
          }, {
            userId: '0001',
            realName: '张一',
            nickName: '张一一',
            phone: '13412345678',
            freeze: false
          }, {
            userId: '0001',
            realName: '张一',
            nickName: '张一一',
            phone: '13412345678',
            freeze: false
          }, {
            userId: '0001',
            realName: '张一',
            nickName: '张一一',
            phone: '13412345678',
            freeze: false
          }, {
            userId: '0001',
            realName: '张一',
            nickName: '张一一',
            phone: '13412345678',
            freeze: false
          }, {
            userId: '0001',
            realName: '张一',
            nickName: '张一一',
            phone: '13412345678',
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