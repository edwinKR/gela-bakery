import { shopActionTypes } from './shop_types';

export const updateShopData = shopData => {
  return {
    type: shopActionTypes.UPDATE_SHOP_DATA,
    payload: shopData,
  };
};
