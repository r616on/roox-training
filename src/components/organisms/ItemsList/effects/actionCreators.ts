import { SET_ITEMS, GET_ITEMS, SET_REQUESTSTATUS } from "./actionTypes";
import { RequestStatusType } from "../../../../utils/requestStatuses";
import {IgetItems, IsetItems, IsetRequestStatus} from "../interfaces";


export function getItems(): IgetItems {
  return { type: GET_ITEMS };
}
export function setItems(items: []): IsetItems {
  return { type: SET_ITEMS, payload: items };
}
export function setRequestStatus(
  status: RequestStatusType
): IsetRequestStatus {
  return { type: SET_REQUESTSTATUS, payload: status };
}
