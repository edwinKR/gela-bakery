import { shopActionTypes } from './shop_types';

const INITIAL_STATE = {
  shopData: null,
  isFetching: false,
  errorMessage: '',
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.REQUEST_SHOP_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.RECEIVED_SHOP_DATA:
      return {
        ...state,
        shopData: action.payload,
        isFetching: false,
      };
    case shopActionTypes.INVALIDATE_SHOP_DATA:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
