import {
  SET_ITEMS,
  SET_PAGE,
  SET_REQUESTSTATUS,
  SET_TOTAL,
} from "./actionTypes";
import { ActionTypes, IinitialState } from "../interfaces";

const initialState: IinitialState = {
  items: [],
  page: 1,
  total: 1,
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
};

export default function itemsList(
  state = initialState,
  action: ActionTypes
): IinitialState {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload };
    case SET_REQUESTSTATUS:
      return {
        ...state,
        requestStatus: { ...action.payload },
      };
    case SET_PAGE:
      return { ...state, page: +action.payload };
    case SET_TOTAL:
      return { ...state, total: +action.payload };
    default:
      return state;
  }
}
