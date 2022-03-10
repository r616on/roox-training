import { SET_ITEMS, SET_REQUESTSTATUS } from "./actionTypes";
import { RequestStatusType } from "../../../../utils/requestStatuses";
import { ActionTypes } from "./actionCreators";

type initialStateType = {
  items: [];
  requestStatus: RequestStatusType;
};

const initialState: initialStateType = {
  items: [],
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
};

export default function itemsList(
  state = initialState,
  action: ActionTypes
): initialStateType {
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
