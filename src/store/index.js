import Vue from 'vue'
import Vuex from 'vuex'
import movie from './modules/movie'
import main from './modules/main'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 1,
      num: 10
    },
    modules: {
      movie,
      main
    }
  })
  
  export default store
