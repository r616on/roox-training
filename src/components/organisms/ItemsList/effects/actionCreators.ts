import { SET_ITEMS, GET_ITEMS, SET_REQUESTSTATUS } from "./actionTypes";
import { RequestStatusType } from "./reducer";

type GetItemsType = {
  type: typeof GET_ITEMS;
};
type SetItemsType = {
  type: typeof SET_ITEMS;
  payload: {};
};
type SetRequestStatusType = {
  type: typeof SET_REQUESTSTATUS;
  payload: RequestStatusType;
};

export function getItems(): GetItemsType {
  return { type: GET_ITEMS };
}
export function setItems(items: {}): SetItemsType {
  return { type: SET_ITEMS, payload: items };
}
export function setRequestStatus(
  status: RequestStatusType
): SetRequestStatusType {
  return { type: SET_REQUESTSTATUS, payload: status };
}
