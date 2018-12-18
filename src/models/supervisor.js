
import { getSupervisors } from "../services/supervisor";


export default {

  namespace: 'supervisor',

  state: {
    supervisors: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getSupervisors({}, { call, put }) {
      const response = yield call(getSupervisors)
      const { success, raw } = response
      if (success) {
        yield put({
          type: "save",
          payload: {
            supervisors: raw.supervisors.map((item) => {
              return {
                ...item,
                pollingUnit: item.pu.name,
              }
            }),
          }
        });
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
