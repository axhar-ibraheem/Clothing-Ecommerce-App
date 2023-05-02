import "./App.css";
import Shop from "./components/Shop";
import React, { useState } from "react";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import ShopContextProvider from "./components/Store/ShopContextProvider";

const shirtItemTypes = [
  {
    id: 1,
    tshirtType: "Navy Blue Adidas",
    description: "100% cotton",
    price: 1200,
    large: 10,
    medium: 10,
    small: 10,
  },
  {
    id: 2,
    tshirtType: "Button-down Nike",
    description: "100% cotton",
    price: 1000,
    large: 10,
    medium: 10,
    small: 10,
  },
  {
    id: 3,
    tshirtType: "Flanner Levi",
    description: "100% cotton",
    price: 1800,
    large: 10,
    medium: 10,
    small: 10,
  },
  {
    id: 4,
    tshirtType: "Half Sleeve Calvin",
    description: "100% cotton",
    price: 800,
    large: 10,
    medium: 10,
    small: 10,
  },
  {
    id: 5,
    tshirtType: "Casual Blue Puma",
    description: "100% cotton",
    price: 900,
    large: 10,
    medium: 10,
    small: 10,
  },
];

function App() {
  const [showCart, setShowCart] = useState(false);

  const [shirtItems, setShirtItems] = useState(shirtItemTypes);

  const onShowCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };

  const onAddItemHandler = (item) => {
    setShirtItems([item, ...shirtItems]);
  };
  return (
    <ShopContextProvider>
      <Shop onAddItem={onAddItemHandler} onShow={onShowCartHandler} />
      <Product shirtItems={shirtItems} />
      {showCart && <Cart closeCart={closeCartHandler} />}
    </ShopContextProvider>
  );
}

export default App;
