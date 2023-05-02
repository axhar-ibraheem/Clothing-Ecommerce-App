import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import "./Cart.css";
import ShopContext from "../Store/shopContext";
import CartItems from "./CartItems";

const Cart = (props) => {
  const ctx = useContext(ShopContext);
  return (
    <Modal closeCart={props.closeCart}>
      <CartItems></CartItems>
      <div className="amount">
        <h3>Total Amount</h3>
        <h3>₹{ctx.totalAmount}</h3>
      </div>
      <div className="cart-btns">
        <button className="order-btn">Order</button>
        <button onClick={props.closeCart} className="close-btn">
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
