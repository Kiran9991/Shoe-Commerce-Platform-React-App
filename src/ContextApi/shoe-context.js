import React from "react";

const ShoeContext = React.createContext({
    items: [],
    cartItems: [],
    addItem: (item) => {},
    addCartItem: (item) => {},
    removeItem: (id) => {},
});

export default ShoeContext;