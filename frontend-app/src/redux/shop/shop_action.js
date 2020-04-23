import { shopActionTypes } from './shop_types';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utilities';

export const initiateFetchShopData = () => {
  return {
    type: shopActionTypes.REQUEST_SHOP_DATA,
  };
};

export const receiveShopData = shopData => {
  return {
    type: shopActionTypes.RECEIVED_SHOP_DATA,
    payload: shopData,
  };
};

export const handleFetchError = errorMessage => {
  return {
    type: shopActionTypes.INVALIDATE_SHOP_DATA,
    payload: errorMessage,
  };
};

export const fetchShopDataAsync = () => {
  return async dispatch => {
    try {
      const categoriesRef = await firestore.collection('categories');
      await dispatch(initiateFetchShopData());

      const snapshot = await categoriesRef.get();
      const shopDataMap = await convertCollectionSnapshotToMap(snapshot);
      dispatch(receiveShopData(shopDataMap));
    } catch (error) {
      dispatch(handleFetchError(error.message));
    }
  };
};
