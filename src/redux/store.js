import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from './middleware/promiseMiddleware'

import combineReducers from './reducers'

const store = createStore(combineReducers, applyMiddleware(promiseMiddleware))

if (module.hot) {
  module.hot.accept("./reducers", () => {
      const nextCombineReducers = require("./reducers").default;
      store.replaceReducer(nextCombineReducers);
  });
}

export default store
