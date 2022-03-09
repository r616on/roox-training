import {
  SET_FULLPEOPLE_ITEM,
  GET_FULLPEOPLE_ITEM,
  SET_REQUESTSTATUS,
  SET_ID,
} from "./actionTypes";
import { RequestStatusType } from "../../../../utils/requestStatuses";

type GetItemsType = {
  type: typeof GET_FULLPEOPLE_ITEM;
};
type SetItemsType = {
  type: typeof SET_FULLPEOPLE_ITEM;
  payload: {};
};
type SetIdType = {
  type: typeof SET_ID;
  payload: string | undefined;
};
type SetRequestStatusType = {
  type: typeof SET_REQUESTSTATUS;
  payload: RequestStatusType;
};

export function getFullPeopleItem(): GetItemsType {
  return { type: GET_FULLPEOPLE_ITEM };
}
export function setFullPeopleItem(items: {}): SetItemsType {
  return { type: SET_FULLPEOPLE_ITEM, payload: items };
}
export function setId(id: string): SetIdType {
  return { type: SET_ID, payload: id };
}
export function setRequestStatus(
  status: RequestStatusType
): SetRequestStatusType {
  return { type: SET_REQUESTSTATUS, payload: status };
}
