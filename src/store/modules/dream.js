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
    axios('http://php72.local/shaman/public/index.php/api/auth/dreams')
      .then(r => r.data)
      .then(dreams => {
        commit('SET_DREAMS', dreams)
      })
  },
  deleteDream({ commit }, id) {
    axios.delete('http://php72.local/shaman/public/index.php/api/auth/dreams/'+id)
      .then(r => {
        commit('DELETE_DREAM', id)
      })
  },
}

// mutations
const mutations = {
  SET_DREAMS(state, dreams) {
    state.dreams = dreams.data
  },
  DELETE_DREAM(state, id) {
    console.log(state)
    console.log(id)
    var removeIndex = state.dreams.map(function(item) { return item.id; })
                       .indexOf(id)

    console.log(removeIndex)
    ~removeIndex && state.dreams.splice(removeIndex, 1)
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}