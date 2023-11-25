import { useState } from "react";

import ShoeContext from "./shoe-context";

const ShoeProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [cartItems, updateCartItems] = useState([]);

  const addItemToShoeHandler = (item) => {
    updateItems([...items, item]);
  };

  const addItemToCartHandler = item => {
    updateCartItems([...cartItems, item]);
  }

  const removeItemFromShoeCartHandler = (id) => {
    updateItems((prev) => {
      const updatedPrevList = prev.filter((item) => item.id !== id);
      return updatedPrevList;
    });
  };

  const shoeContext = {
    items: items,
    cartItems: cartItems,
    addItem: addItemToShoeHandler,
    addCartItem: addItemToCartHandler,
    removeItem: removeItemFromShoeCartHandler,
  };

  return (
    <ShoeContext.Provider value={shoeContext}>
      {props.children}
    </ShoeContext.Provider>
  );
};

export default ShoeProvider;
