import { SET_FULLPEOPLE_ITEM, SET_REQUESTSTATUS, SET_ID } from "./actionTypes";
import { ActionTypes, IinitialState } from "../interfaces";

const initialState: IinitialState = {
  item: {},
  id: "",
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
};

export default function FullPeople(
  state = initialState,
  action: ActionTypes
): IinitialState {
  switch (action.type) {
    case SET_FULLPEOPLE_ITEM:
      return { ...state, item: action.payload };
    case SET_ID:
      return { ...state, id: action.payload };
    case SET_REQUESTSTATUS:
      return {
        ...state,
        requestStatus: { ...action.payload },
      };
    default:
      return state;
  }
}
