import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      posts: null
    }
  },
  mutations: {
    SET_POSTS(state, data) {
      state.posts = data
    }
  },
  actions: {
    async FETCH_POSTS({commit}) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        commit('SET_POSTS', data)
        
      } catch (er) {
        console.log(er)
      }
    }
  },
})
