import * as React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore, Reducer, Store } from "redux";
import { logger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";

import { RootAction, RootState } from "AppTypes";
import { staticReducers } from "./root-reducer";
import { environment } from "../environments";
import { BehaviorSubject } from "rxjs";
import { mergeMap } from "rxjs/operators";
import rootEpics from "./root-epics";


const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();

const middlewares = [epicMiddleware];

const composeEnhancers = environment.debug
  ? (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  : compose;
// if (environment.debug) {
//   middlewares.push(logger)
// }
// compose enhancers

type EnhancedStore = {
  asyncReducers : {[key:string]:Reducer}
  injectReducer:(key, asyncReducer: Reducer) => void
} & Store

export const configureStore = (initialState, enhancer) => {
  const store:EnhancedStore = createStore(createReducer(), initialState, enhancer);

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer

  store.injectReducer = (key, asyncReducer: Reducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // Return the modified store
  return store;
};

function createReducer(asyncReducers = {}) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  });
}


const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};
export const store = configureStore(initialState, enhancer);


export const epics$ = new BehaviorSubject(rootEpics);
export const rootEpics$ = (action$, state$) => epics$.pipe(
// @ts-ignore
  mergeMap(epic => epic(action$, state$))
);

epicMiddleware.run(rootEpics$);


export const StoreProvider = props => (
  <Provider store={store}>{props.children}</Provider>
);


export default store;
