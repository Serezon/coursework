import {createStore, applyMiddleware, Store} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

import rootReducer from "./rootReducer";
import rootEpic from "./rootEpic";

const epicMiddleware = createEpicMiddleware();

export default function configureStore(): Store {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );

  epicMiddleware.run(rootEpic);

  return store;
}
