// import { compose } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { fork } from "redux-saga/effects";
import createSagaMiddleware from "@redux-saga/core";
import {
  ItemsListSaga,
  itemsList,
} from "../components/organisms/ItemsList/effects";
import {
  FullPeopleSaga,
  FullPeople,
} from "../components/molecules/FullPeopleCart/effects/index";
import {
  PlanetsList,
  PlanetsListSaga,
} from "../components/organisms/PlanetsList/effects";
import {
  FullPlanetCart,
  FullPlanetCartSaga,
} from "../components/molecules/FullPlanetCart/effects";

// const composeEnhancers =
//   //@ts-ignore
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? //@ts-ignore
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

export const rootReducer = combineReducers({
  itemsList,
  FullPeople,
  PlanetsList,
  FullPlanetCart,
});

function* rootSaga(): Generator {
  yield fork(ItemsListSaga);
  yield fork(FullPeopleSaga);
  yield fork(PlanetsListSaga);
  yield fork(FullPlanetCartSaga);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
