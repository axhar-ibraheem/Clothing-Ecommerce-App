import React from "react";
import ShoppingForm from "./shoppingForm";


const Shop = (props) => {
  return (
    <div>
      <ShoppingForm showCart={props.onShow} onAddItem = {props.onAddItem}></ShoppingForm>
    </div>
  );
};

export default Shop;
