export default {
  namespaced: true,
  state: {
    color: "",
  },
  mutations: {
    changeSkin(state, payload) {
      state.color = payload;
    },
  },
  actions: {
    changeSkin({ commit }, payload) {
      commit("changeSkin", payload);
    },
  },
  getters: {
    // changeSkin(state,payload){
    // }
  },
};
