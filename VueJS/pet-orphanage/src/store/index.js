import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions, //to change the data in the state, we dont directly access it
  // and change it but we use actions, which is followed by mutations and it does the update work in the state for us.
  getters,    //lets see antoher topic getter and its working ::
  // it wont actually update the state but it will excute some in between steps and get something which we want out of it.
  modules: {
  }
})
