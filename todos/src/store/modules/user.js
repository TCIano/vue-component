export default {
  namespaced: true,
  state: {
    //todos 数据
    list: [
      {
        name: "吃饭",
        done: false,
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
    unFinishList: [],
    FinishedList: [],
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
    unFinish(state) {
      if (state.unFinishList.length !== 0) {
        state.list = state.unFinishList;
        // console.log(state.list);
        state.list = state.unFinishList.filter((item) => {
          return item.done === false;
        });
      } else {
        state.unFinishList = state.list;
        state.list = state.unFinishList.filter((item) => {
          return item.done === false;
        });
      }
    },
    allList(state) {
      // state.list = state.list;
      if (state.unFinishList.length !== 0) {
        state.list = state.unFinishList;
      }
    },
    Finished(state) {
      if (state.unFinishList.length === 0) {
        state.unFinishList = state.list;
        state.list = state.list.filter((item) => {
          return item.done === true;
        });
      } else {
        state.list = state.unFinishList.filter((item) => {
          return item.done === true;
        });
      }
    },
    cleanFinished(state) {
      state.list.forEach((item) => {
        item.done = false;
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
    unFinish({ commit }) {
      commit("unFinish");
    },
    allList({ commit }) {
      commit("allList");
    },
    Finished({ commit }) {
      commit("Finished");
    },
    cleanFinished({ commit }) {
      commit("cleanFinished");
    },
  },
  getters: {},
};
