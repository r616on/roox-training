import axios from "axios";
import { IItemCart } from "../components/molecules/ItemCart/interfaces";
import { IPlanetCart } from "../components/molecules/PlanetsCart/interfaces";
import { IpeopleResp, IplanetsResp } from "./interfaces";

const instanse = axios.create({
  baseURL: "https://swapi.dev/",
});

export const AppAPI = {
  getItems(page: number) {
    return instanse
      .get<IpeopleResp>("api/people/", {
        params: {
          page: page,
        },
      })
      .then((res) => res.data);
  },
  getFullPeole(id: string) {
    return instanse.get<IItemCart>(`api/people/${id}/`).then((res) => res.data);
  },
  getPlanets(page: number) {
    return instanse
      .get<IplanetsResp>("api/planets/", {
        params: {
          page: page,
        },
      })
      .then((res) => res.data);
  },
  getFullPlanet(id: string) {
    return instanse
      .get<IPlanetCart>(`api/planets/${id}/`)
      .then((res) => res.data);
  },
};
// const rtt = () => async () => {
//   let response = await AppAPI.getFullPeole("1");
// };
