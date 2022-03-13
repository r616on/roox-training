import axios from "axios";

const instanse = axios.create({
  baseURL: "https://swapi.dev/",
});

export const AppAPI = {
  getItems(page: number) {
    return instanse
      .get("api/people/", {
        params: {
          page: page,
        },
      })
      .then((res) => res.data);
  },
  getFullPeole(id: string) {
    return instanse.get(`api/people/${id}/`).then((res) => res.data);
  },
  getPlanets(page: number) {
    return instanse
      .get("api/planets/", {
        params: {
          page: page,
        },
      })
      .then((res) => res.data);
  },
  getFullPlanet(id: string) {
    return instanse.get(`api/planets/${id}/`).then((res) => res.data);
  },
};
