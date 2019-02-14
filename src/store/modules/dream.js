import axios from 'axios';

// initial state
const state = {
  dreams: []
}

// getters
const getters = {
  dreams: state => state.dreams
}

// actions
const actions = {
  getDreams({ commit }) {
    axios('http://php72.example.com/shaman/public/index.php/api/auth/dreams')
      .then(r => r.data)
      .then(dreams => {
        commit('SET_DREAMS', dreams)
      })
  },
}

// mutations
const mutations = {
  SET_DREAMS(state, dreams) {
    state.dreams = dreams
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}