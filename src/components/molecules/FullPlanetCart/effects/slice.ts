import { createSlice } from "@reduxjs/toolkit";
import { IinitialState } from "../interfaces";

const initialState: IinitialState = {
  item: {},
  id: "",
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
};

const FullPlanetCart = createSlice({
  name: "FullPlanetCart",
  initialState: initialState,
  reducers: {
    getFullPlanetItem() {},
    setFullPlanetItem(state, action) {
      state.item = { ...action.payload };
    },
    setId(state, action) {
      state.id = action.payload;
    },
    setRequestStatus(state, action) {
      state.requestStatus = action.payload;
    },
  },
});

export const actionsFullPlanetCart = FullPlanetCart.actions;
export default FullPlanetCart.reducer;
