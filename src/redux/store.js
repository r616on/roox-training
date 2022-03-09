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

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const reducer = combineReducers({
  itemsList,
  FullPeople,
});

function* rootSaga() {
  yield fork(ItemsListSaga);
  yield fork(FullPeopleSaga);
}

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState) =>
  createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

const store = configureStore({});

sagaMiddleware.run(rootSaga);
export default store;
