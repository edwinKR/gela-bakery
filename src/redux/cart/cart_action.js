import { cartActionTypes } from './cart_types';

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const deleteEntireItem = item => ({
  type: cartActionTypes.DELETE_ENTIRE_ITEM,
  payload: item,
});

export const decrementItem = item => ({
  type: cartActionTypes.DECREMENT_ITEM,
  payload: item,
});
