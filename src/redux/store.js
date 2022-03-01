import { createStore, compose,combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const test = (state = {}, action) => {
  return state;
}

const reducer = combineReducers({
  test,
});
 
const sagaMiddlewatre =createSagaMiddleware()

const configureStore = preloadedState => createStore(
  reducer,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddlewatre)),
);

const store = configureStore({});
sagaMiddlewatre.run(rootSaga)

export default store;