import {
  GET_FULLPEOPLE_ITEM,
  SET_FULLPEOPLE_ITEM,
  SET_ID,
  SET_REQUESTSTATUS,
} from "./effects/actionTypes";
import { RequestStatusType } from "../../../utils/requestStatuses";
import { IItemCart } from "../ItemCart/interfaces";

export interface IGetItems {
  type: typeof GET_FULLPEOPLE_ITEM;
}
export interface ISetItems {
  type: typeof SET_FULLPEOPLE_ITEM;
  payload: {};
}
export interface ISetId {
  type: typeof SET_ID;
  payload: string | undefined;
}
export interface ISetRequestStatus {
  type: typeof SET_REQUESTSTATUS;
  payload: RequestStatusType;
}
export type ActionTypes = IGetItems | ISetItems | ISetId | ISetRequestStatus;

export interface IinitialState {
  item: IItemCart;
  id: string | undefined;
  requestStatus: RequestStatusType;
}
