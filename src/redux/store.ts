import { createStore, compose, combineReducers, applyMiddleware } from "redux";
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
import { AppStoreType } from "./interfaces";

const composeEnhancers =
  //@ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const rootReducer = combineReducers({
  itemsList,
  FullPeople,
});

function* rootSaga(): Generator {
  yield fork(ItemsListSaga);
  yield fork(FullPeopleSaga);
}

const sagaMiddleware = createSagaMiddleware();

const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

const store = configureStore();

sagaMiddleware.run(rootSaga);
export default store;
