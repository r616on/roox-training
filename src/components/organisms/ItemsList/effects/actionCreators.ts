import {
  SET_ITEMS,
  GET_ITEMS,
  SET_REQUESTSTATUS,
  SET_PAGE,
  SET_TOTAL,
} from "./actionTypes";
import { RequestStatusType } from "../../../../utils/requestStatuses";
import {
  IgetItems,
  IsetItems,
  IsetPage,
  IsetRequestStatus,
  IsetTotal,
} from "../interfaces";

export function getItems(): IgetItems {
  return { type: GET_ITEMS };
}
export function setItems(items: []): IsetItems {
  return { type: SET_ITEMS, payload: items };
}
export function setRequestStatus(status: RequestStatusType): IsetRequestStatus {
  return { type: SET_REQUESTSTATUS, payload: status };
}
export function setPage(page: number): IsetPage {
  return { type: SET_PAGE, payload: page };
}
export function setTotal(total: number): IsetTotal {
  return { type: SET_TOTAL, payload: total };
}
