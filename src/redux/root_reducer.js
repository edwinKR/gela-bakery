import { combineReducers } from 'redux';

import userReducer from './user/user_reducer';

// Our full state of redux is 'one big JSON object'
export default combineReducers({
  user: userReducer,
});
