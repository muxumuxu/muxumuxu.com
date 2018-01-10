import Vuex from 'vuex'
import { fetchPages } from '../api'

export default function () {
  return new Vuex.Store({
    state: {
      pages: {}
    },

    mutations: {
      setPages (state, pages) {
        state.pages = pages
      }
    },

    actions: {
      fetchPages ({ state, commit }) {
        return fetchPages().then(pages => commit('setPages', pages))
      }
    }
  })
}
