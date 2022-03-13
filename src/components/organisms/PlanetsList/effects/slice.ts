import { createSlice } from "@reduxjs/toolkit";
import {
  IinitialState,
  IsetPage,
  IsetPlanets,
  IsetRequestStatus,
  IsetTotal,
} from "../interfaces";

const initialState: IinitialState = {
  planets: [],
  page: 1,
  total: 1,
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
};

const PlanetsList = createSlice({
  name: "PlanetsList",
  initialState: initialState,
  reducers: {
    getPlanets() {},
    setPlanets(state, action: IsetPlanets) {
      state.planets = action.payload;
    },

    setPage(state, action: IsetPage) {
      state.page = action.payload;
    },
    setTotal(state, action: IsetTotal) {
      state.total = action.payload;
    },

    setRequestStatus(state, action: IsetRequestStatus) {
      state.requestStatus = action.payload;
    },
  },
});

export const ActionsPlanetsList = PlanetsList.actions;
export default PlanetsList.reducer;
