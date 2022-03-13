import { RequestStatusType } from "../../../utils/requestStatuses";

export interface IinitialState {
  planets: [];
  page: number;
  total: number;
  requestStatus: RequestStatusType;
}

export interface IsetPlanets {
  type: string;
  payload: [];
}
export interface IsetPage {
  type: string;
  payload: number;
}
export interface IsetTotal {
  type: string;
  payload: number;
}

export interface IsetRequestStatus {
  type: string;
  payload: RequestStatusType;
}
