import getUser from './getUser';
import getUsers from './getUsers';

export default {
  namespaced: true,
  state: {
    ...getUser.state,
    ...getUsers.state
  },
  mutations: {
    ...getUser.mutations,
    ...getUsers.mutations
  },
  actions: {
    ...getUser.actions,
    ...getUsers.actions
  }
};