import React, { useContext } from "react";
import "./CartButton.css";
import ShopContext from "../Store/shopContext";
const CartButton = (props) => {
  const ctx = useContext(ShopContext);
  const noOfCartItems = ctx.items.reduce((currValue, item) => {
    return currValue + item.M + item.L + item.S;
  }, 0);
  return (
    <button onClick={props.showCart} className="cart-btn">
      <span>Cart</span>
      <span>{noOfCartItems}</span>
    </button>
  );
};

export default CartButton;
