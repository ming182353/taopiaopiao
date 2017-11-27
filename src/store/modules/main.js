import * as types from '../mutations'
import Vue from 'vue'

let axios = Vue.prototype.$axios
const state = {
    MovieMainList: []
}

//getters
const getters = {
  MovieMainList: (state) => {
    return state.MovieMainList
  }
}

//actions
const actions = {
    getMainList({commit, state}, params) {
        return new Promise((resolve, reject) => {
            axios.get('/api/moviemainList', {
                params
            }).then((response) => {
                commit(types.GET_MAIN_LIST, response.data.data)
                resolve(state.MovieMainList)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}

//mutations
const mutations = {
    [types.GET_MAIN_LIST](state, MovieMainList) {
        state.MovieMainList = state.MovieMainList.concat(MovieMainList)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
