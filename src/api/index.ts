import axios from "axios";

const instanse = axios.create({
  baseURL: "https://swapi.dev/",
});

export const AppAPI = {
  getItems() {
    return instanse.get("api/people/").then((res) => res.data.results);
  },
  getFullPeole(id: string) {
    return instanse.get(`api/people/${id}/`).then((res) => res.data);
  },
};
