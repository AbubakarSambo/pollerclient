import { routerRedux } from "dva/router";
import {
  login,
} from "../services/authentication";

export default {
  namespace: "authentication",
  state: {
  },

  subscriptions: {
    setup({ dispatch, history }) {
    }
  },

  effects: {
    *login(payload, { call, select, put }) {
      const { data } = payload
      const response = yield call(login, data)
      const { success, raw } = response
      if (success) {
        localStorage.setItem('token', raw.token)
        yield put(routerRedux.push("/dashboard"));
      }

    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
