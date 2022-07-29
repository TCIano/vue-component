export default {
  namespaced: true,
  state: {
    //todos 数据
    list: [
      {
        name: "吃饭",
        done: true,
        id: 10,
      },
      {
        name: "睡觉",
        done: false,
        id: 11,
      },
      {
        name: "打豆豆",
        done: false,
        id: 12,
      },
    ],
  },
  mutations: {
    delListItem(state, payload) {
      state.list.splice(payload, 1);
    },
    addListItem(state, payload) {
      state.list.unshift({
        id: state.list[state.list.length - 1].id + 1,
        name: payload,
        done: false,
      });
    },
    changeRadioS(state, payload) {
      state.list.forEach((item) => {
        if (item.name === payload.name) {
          item.done = !item.done;
        }
      });
    },
  },
  actions: {
    delListItem({ commit }, payload) {
      commit("delListItem", payload);
    },
    addListItem({ commit }, payload) {
      console.log(payload);
      commit("addListItem", payload);
    },
    changeRadioS({ commit }, payload) {
      commit("changeRadioS", payload);
    },
  },
  getters: {},
};
