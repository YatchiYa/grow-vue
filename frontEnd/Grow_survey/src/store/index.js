
import Vue from 'vue'  
import Vuex from 'vuex'

// imports of AJAX functions go here
import { fetchSurveys } from '@/api'
import { fetchcharacters } from '@/api'

Vue.use(Vuex)

const state = {  
  // single source of data
  surveys: [],
  characters : []
}

const actions = {  
  // asynchronous operations
  loadSurveys(context) {
    return fetchSurveys()
      .then((response) => context.commit('setSurveys', { surveys: response }))
  },
  loadCharacters(context) {
    return fetchcharacters()
      .then((response) => context.commit('setCharacters', { characters: response }))
  }
}

const mutations = {  
  // isolated data mutations
  setSurveys(state, payload) {
    state.surveys = payload.surveys
  },
  setCharacters(state, payload) {
    state.characters = payload.characters
  }
}

const getters = {  
  // reusable data accessors
}

const store = new Vuex.Store({  
  state,
  actions,
  mutations,
  getters
})

export default store  