import SHOPPING_DUMMY_DATA from './shop_dummy_data';

const INITIAL_STATE = {
  shopData: SHOPPING_DUMMY_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
