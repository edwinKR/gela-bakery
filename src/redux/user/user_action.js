// When an action is triggered, it will eventually trigger the reducer.
export const setCurrentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    payload: user,
  };
};
