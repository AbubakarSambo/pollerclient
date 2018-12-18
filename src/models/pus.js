
import { getPus, createPu, getStates,getLgas,getWards, getPuByState, getPuByLga, getPuByWard } from "../services/pus";


export default {

  namespace: 'pu',

  state: {
    pus: [],
    activePu: {},
    states: [],
    lgas: [],
    wards: []
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
    *getStates({}, { call, put }) {
      const response = yield call(getStates)
      const { success, raw } = response
      if (success) {
        const statesModified = raw.map((state) => {
          return {
            value: state.name.toUpperCase(),
            label: state.name
          }
        })
        yield put({
          type: "save",
          payload: {
            states: statesModified,
          }
        });
      }
    },
    *getLgas(payload, { call, put }) {
      const {data } = payload
      const response = yield call(getLgas, data)
      const { success, raw } = response
      if (success) {
        const lgasModified = raw.map((lga) => {
          return {
            value: lga.toUpperCase(),
            label: lga
          }
        })
        yield put({
          type: "save",
          payload: {
            lgas: lgasModified,
          }
        });
      }
    },
    *getWards(payload, { call, put }) {
      const {data } = payload
      const response = yield call(getWards, data)
      const { success, raw } = response
      if (success) {
        const wardsModified = raw.map((ward) => {
          return {
            value: ward.toUpperCase(),
            label: ward
          }
        })
        yield put({
          type: "save",
          payload: {
            wards: wardsModified,
          }
        });
      }
    },
    *getPuByStates(payload, { call, put }) {
      const { data } = payload
      const response = yield call(getPuByState, data)
      const { success, raw } = response
      let newDocs = raw.docs.map((pu) => {
        return {
          ...pu,
          key: pu._id,
          setup: pu.setup ? 'Yes': 'No',
          accreditationStarted: pu.accreditationStarted ? 'Yes' : 'No',
          accreditationEnded: pu.accreditationEnded ? 'Yes' : 'No',
          votingStarted: pu.votingStarted ? 'Yes': 'No',
          votingEnded : pu.votingEnded ? 'Yes' : 'No'
        }
      })
      let pusModified = {
        ...raw,
        docs: newDocs
      }
      if (success) {
        yield put({
          type: "save",
          payload: {
            pus: pusModified,
          }
        });
      }
    },
    *getPuByLga(payload, { call, put }) {
      const { data } = payload
      const response = yield call(getPuByLga, data)
      const { success, raw } = response
      let newDocs = raw.docs.map((pu) => {
        return {
          ...pu,
          key: pu._id
        }
      })
      let pusModified = {
        ...raw,
        docs: newDocs
      }
      if (success) {
        yield put({
          type: "save",
          payload: {
            pus: pusModified,
          }
        });
      }
    },
    *getPuByWard(payload, { call, put }) {
      const { data } = payload
      const response = yield call(getPuByWard, data)
      const { success, raw } = response
      let newDocs = raw.docs.map((pu) => {
        return {
          ...pu,
          key: pu._id
        }
      })
      let pusModified = {
        ...raw,
        docs: newDocs
      }
      if (success) {
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
