import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user_reducer';
import cartReducer from './cart/cart_reducer';
import menuDirReducer from './menu_directory/menu_directory_reducer';
import shopReducer from './shop/shop_reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  menuDirectory: menuDirReducer,
  shop: shopReducer,
});

// Our full state of redux is 'one big JSON object'
// We now have persistency.
export default persistReducer(rootPersistConfig, rootReducer);
