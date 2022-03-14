import { IItemCart } from "../components/molecules/ItemCart/interfaces";
import { IPlanetCart } from "../components/molecules/PlanetsCart/interfaces";

export interface IplanetsResp {
  count: number;
  next: string;
  previous: null | string;
  results: IPlanetCart;
}
export interface IpeopleResp {
  count: number;
  next: string;
  previous: null | string;
  results: IItemCart;
}
