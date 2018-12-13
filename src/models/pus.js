
import { getPus, createPu } from "../services/pus";


export default {

  namespace: 'pu',

  state: {
    pus: [],
    activePu: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *savePu(payload, { call, select, put, dispatch }) {
      const { data } = payload
      const response = yield call(createPu, data)
    },
    *getPus({}, { call, put }) {
      const response = yield call(getPus)
      const { success, raw } = response
      if (success) {
        let pusModified = raw.map((pu) => {
          return {
            ...pu,
            setup: pu.setup ? 'Yes': 'No',
            accreditationStarted: pu.accreditationStarted ? 'Yes' : 'No',
            accreditationEnded: pu.accreditationEnded ? 'Yes' : 'No',
            votingStarted: pu.votingStarted ? 'Yes': 'No',
            votingEnded : pu.votingEnded ? 'Yes' : 'No'
          }
        })
        yield put({
          type: "save",
          payload: {
            pus: pusModified,
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
