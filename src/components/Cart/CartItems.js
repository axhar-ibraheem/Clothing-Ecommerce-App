import "./CartItems.css";
import React, { useContext } from "react";
import ShopContext from "../Store/shopContext";
const CartItems = (props) => {
  const ctx = useContext(ShopContext);
  return (
    <div>
      <ul className="cart-list">
        {ctx.items.map((item) => (
          <li key={item.id} className="cart-list-item">
            <div className="item-info">
              <span className="type">{item.type}</span>
              <span>{item.description}</span>
              <span>₹{item.price}</span>
            </div>
            <div className="item-size-info">
              <p>
                <span>L</span> {item.L}
              </p>
              <p>
                <span>M</span> {item.M}
              </p>
              <p>
                <span>S</span> {item.S}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
