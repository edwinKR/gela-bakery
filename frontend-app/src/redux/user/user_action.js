import { userActionTypes } from './user_types';

// When an action is triggered, it will eventually trigger the reducer.
export const setCurrentUser = user => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};
