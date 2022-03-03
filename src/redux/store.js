import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../components/organisms/ItemsList/effects/sagas";
import itemsList from "../components/organisms/ItemsList/effects/reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const reducer = combineReducers({
  itemsList,
});

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
