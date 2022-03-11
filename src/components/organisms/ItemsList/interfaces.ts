import {GET_ITEMS, SET_ITEMS, SET_REQUESTSTATUS} from "./effects/actionTypes";
import {RequestStatusType} from "../../../utils/requestStatuses";

export interface IgetItems {
    type: typeof GET_ITEMS
};
export interface IsetItems {
    type: typeof SET_ITEMS,
    payload: [],
};
export interface IsetRequestStatus {
    type: typeof SET_REQUESTSTATUS,
    payload: RequestStatusType
};
export type ActionTypes = IgetItems | IsetItems | IsetRequestStatus;

export interface IinitialState {
    items: [],
    requestStatus: RequestStatusType
};
