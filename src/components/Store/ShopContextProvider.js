import ShopContext from "./shopContext";
import React, { useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount +
      (action.payload.M + action.payload.L + action.payload.S) *
        action.payload.price;
    let isPresent = false;
    let updatedItems;

    const changedItems = state.items.map((item) => {
      if (item.id === action.payload.id) {
        isPresent = true;
        if (action.payload.size === "large") {
          return {
            ...item,
            L: item.L + action.payload.L,
          };
        } else if (action.payload.size === "medium") {
          return {
            ...item,
            M: item.M + action.payload.M,
          };
        } else {
          return {
            ...item,
            S: item.S + action.payload.S,
          };
        }
      }
      return item;
    });

    if (isPresent) {
      updatedItems = [...changedItems];
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
};

const ShopContextProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", payload: item });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
  };

  return (
    <ShopContext.Provider value={cartContext}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
