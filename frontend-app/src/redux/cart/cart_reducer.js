import { cartActionTypes } from './cart_types';
import { addItemToCart, decrementItemFromCart } from './cart_util';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.DELETE_ENTIRE_ITEM:
      const filteredCartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id,
      );
      return { ...state, cartItems: filteredCartItems };
    case cartActionTypes.DECREMENT_ITEM:
      return {
        ...state,
        cartItems: decrementItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
