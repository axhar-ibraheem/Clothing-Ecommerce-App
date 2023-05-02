import React from "react";

const ShopContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
});

export default ShopContext;
