import Vuex from 'vuex'
import { fetchPages } from '../api'

export default function () {
  return new Vuex.Store({
    state: {
      locale: null,
      pages: {}
    },

    mutations: {
      setLocale (state, locale) {
        state.locale = locale
      },
      setPages (state, pages) {
        state.pages = pages
      }
    },

    actions: {
      fetchPages ({ state, commit }) {
        return fetchPages(state.locale)
          .then(pages => commit('setPages', pages))
      }
    }
  })
}
