import { RequestStatusType } from "../../../utils/requestStatuses";
import { IPlanetCart } from "../PlanetsCart/interfaces";

export interface IinitialState {
  item: IPlanetCart;
  id: string | undefined;
  requestStatus: RequestStatusType;
}
