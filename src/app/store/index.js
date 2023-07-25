import Vue from 'vue';
import Vuex from 'vuex';

import global from './global';
import user from './user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    user
  }
});
