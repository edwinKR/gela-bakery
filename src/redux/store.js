// applyMiddleware() tells createStore() how to handle middleware
import { createStore, applyMiddleware } from 'redux';
// Log helper that displays all the previous and after state of the redux code
import logger from 'redux-logger';

import { persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; //defaults to localStorage for web.

import rootReducer from './root_reducer';

// Setting up middlewares with an array, since we may need additional stuff to utilize as our middleware.
const middlewares = [logger];

export default () => {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { store, persistor };
};
