import Vue from 'vue';
import Vuex from 'vuex';
import Firebase from 'firebase';
import axios from 'axios'

// imports of AJAX functions go here
import { fetchSurveys } from '@/api'
import { fetchcharacters } from '@/api'

Vue.use(Vuex)

/*
const state = {  
  // single source of data
  surveys: [],
  characters : [],
  username : null,
  password : null,
  email : null,
  token : null
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
  setCharacters(stat, payload) {
    state.characters = payload.characters
  }
}

const getters = {  
  // reusable data accessors
}

*/ 

  const state= {
    user: null
  }

  const getters= {
    getUser: state => {
      return state.user;
    }
  }

  const mutations= {
    setUser: state => {
      state.user = Firebase.auth().currentUser;
    }
  }
  
  const actions= {
    setUser: context => {
      context.commit('setUser');
    }
  }



const store = new Vuex.Store({  
  state,
  actions,
  mutations,
  getters
})

export default store  