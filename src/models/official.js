
import { getOfficials } from "../services/official";


export default {

  namespace: 'official',

  state: {
    officials: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getOfficials({}, { call, put }) {
      const response = yield call(getOfficials)
      const { success, raw } = response
      if (success) {
        yield put({
          type: "save",
          payload: {
            officials: raw.officials.map((item) => {
              return {
                ...item,
                pollingUnit: item.pu.name,
                supervisor: item.supervisor ? `${item.supervisor.firstName} ${item.supervisor.lastName}` : ''
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
