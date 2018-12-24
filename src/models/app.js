import { routerRedux } from "dva/router";

export default {
  namespace: "app",
  state: {},

  subscriptions: {
    setup({ dispatch, history }) { }
  },

  effects: {
    *logout(payload, { call, select, put }) {
      yield put(routerRedux.push("/"));
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
