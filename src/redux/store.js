// applyMiddleware() tells createStore() how to handle middleware
import { createStore, applyMiddleware } from 'redux';
// Log helper that displays all the previous and after state of the redux code
import logger from 'redux-logger';

import rootReducer from './root_reducer';

// Setting up middlewares with an array, since we may need additional stuff to utilize as our middleware.
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
