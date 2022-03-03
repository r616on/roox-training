import { SET_ITEMS, SET_REQUESTSTATUS } from "./actionTypes";

const initialState = {
  items: {},
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
};

export default function itemsList(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload };
    case SET_REQUESTSTATUS:
      return {
        ...state,
        requestStatus: { ...action.payload },
      };
    default:
      return state;
  }
}
