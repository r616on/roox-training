import { SET_ITEMS, GET_ITEMS, SET_REQUESTSTATUS } from "./actionTypes";

export function setItems(items) {
  return { type: SET_ITEMS, payload: items };
}
export function setRequestStatus(status) {
  return { type: SET_REQUESTSTATUS, payload: status };
}
