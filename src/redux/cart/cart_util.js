export const addItemToCart = (currentCartItems, itemToAdd) => {
  // Is the added item already existing in current cart items state list?
  const existingCartItem = currentCartItems.find(item => {
    return item.id === itemToAdd.id;
  });

  // If so, do the following.
  if (existingCartItem) {
    return currentCartItems.map(item => {
      if (item.id === itemToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }

  // If added item is added to the cart list for the first time:
  return [...currentCartItems, { ...itemToAdd, quantity: 1 }];
};

export const decrementItemFromCart = (currentCartItems, itemToRemove) => {
  const existingCartItem = currentCartItems.find(item => {
    return item.id === itemToRemove.id;
  });

  return currentCartItems.map(item => {
    if (item.id === itemToRemove.id) {
      if (existingCartItem.quantity === 1) {
        return { ...item, quantity: 1 };
      }
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
};
