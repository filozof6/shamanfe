import axios from 'axios'

// initial state
const state = {
  dreams: [],
  dream: []
}

// getters
const getters = {
  dreams: state => state.dreams,
  dream: state => state.dream
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
  getDream({ commit }, id) {
    axios.get('http://php72.local/shaman/public/index.php/api/auth/dreams/' + id)
      .then(r => {
        commit('SET_DREAM', r.data)
      })
  },
  deleteDream({ commit }, id) {
    axios.delete('http://php72.local/shaman/public/index.php/api/auth/dreams/' + id)
      .then(r => {
        commit('DELETE_DREAM', id)
      })
  },
  updateDream({ commit }, dream) {
    axios.put('http://php72.local/shaman/public/index.php/api/auth/dreams/' + dream.id,
    dream)
      .then(r => {
        commit('UPDATE_DREAM', dream)
      })
  },
  createDream({ commit }, dream) {
    console.log(dream);
    axios.post('http://php72.local/shaman/public/index.php/api/auth/dreams',
    dream)
      .then(r => {
        commit('CREATE_DREAM', dream)
      })
  }
}

// mutations
const mutations = {
  SET_DREAMS (state, dreams) {
    state.dreams = dreams.data
  },
  SET_DREAM (state, dream) {
    state.dream = dream.data 
  },
  DELETE_DREAM (state, id) {
    var removeIndex = state.dreams.map(function (item) { return item.id })
      .indexOf(id)
    ~removeIndex && state.dreams.splice(removeIndex, 1)
  },
  UPDATE_DREAM (state, dream) {
    var updateIndex = state.dreams.map(function (item) { return item.id })
      .indexOf(dream.id)
    ~updateIndex && (state.dreams[updateIndex] = dream)
  },
  CREATE_DREAM (state, dream) {
    state.dreams.push(dream)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
