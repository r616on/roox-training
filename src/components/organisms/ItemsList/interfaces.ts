import {
  GET_ITEMS,
  SET_ITEMS,
  SET_PAGE,
  SET_REQUESTSTATUS,
  SET_TOTAL,
} from "./effects/actionTypes";
import { RequestStatusType } from "../../../utils/requestStatuses";

export interface IgetItems {
  type: typeof GET_ITEMS;
}
export interface IsetItems {
  type: typeof SET_ITEMS;
  payload: [];
}
export interface IsetPage {
  type: typeof SET_PAGE;
  payload: number;
}
export interface IsetTotal {
  type: typeof SET_TOTAL;
  payload: number;
}
export interface IsetRequestStatus {
  type: typeof SET_REQUESTSTATUS;
  payload: RequestStatusType;
}
export type ActionTypes =
  | IgetItems
  | IsetItems
  | IsetRequestStatus
  | IsetPage
  | IsetTotal;
export interface IinitialState {
  items: [];
  page: number;
  total: number;
  requestStatus: RequestStatusType;
}
