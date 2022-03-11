import {
  SET_FULLPEOPLE_ITEM,
  GET_FULLPEOPLE_ITEM,
  SET_REQUESTSTATUS,
  SET_ID,
} from "./actionTypes";
import { RequestStatusType } from "../../../../utils/requestStatuses";
import { IGetItems, ISetId, ISetItems, ISetRequestStatus } from "../interfaces";

export function getFullPeopleItem(): IGetItems {
  return { type: GET_FULLPEOPLE_ITEM };
}
export function setFullPeopleItem(items: {}): ISetItems {
  return { type: SET_FULLPEOPLE_ITEM, payload: items };
}
export function setId(id: string): ISetId {
  return { type: SET_ID, payload: id };
}
export function setRequestStatus(status: RequestStatusType): ISetRequestStatus {
  return { type: SET_REQUESTSTATUS, payload: status };
}
