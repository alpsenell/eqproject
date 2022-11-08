import Vue from 'vue'
import Vuex from 'vuex'
import LISTING_STORE from '@/store/listing/index';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    LISTING_STORE
  }
})
