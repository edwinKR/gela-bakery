// Initial state set up.
const initialState = {
  currentUser: null,
};

// When action gets fired, the state will change accordingly via this reducer function.
// Every single action that gets fired will trigger the reducers even if it's the relative action for reducers.
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
