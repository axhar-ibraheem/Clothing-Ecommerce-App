import "./ProductItem.css";
import ShopContext from "../Store/shopContext";
import React, { useContext, useState } from "react";
const ProductItem = (props) => {
  const ctx = useContext(ShopContext);

  const [largeTshirts, setLargeTshirts] = useState(props.large);
  const [mediumTshirts, setMediumTshirts] = useState(props.medium);
  const [smallTshirts, setSmallTshirts] = useState(props.small);

  const buyLargeHandler = () => {
    ctx.addItem({
      ...props,
      size: "large",
      L: 1,
      S: 0,
      M: 0,
    });
    setLargeTshirts((preState) => preState - 1);
  };
  const buyMediumHandler = () => {
    ctx.addItem({
      ...props,
      size: "medium",
      M: 1,
      S: 0,
      L: 0,
    });
    setMediumTshirts((preState) => preState - 1);
  };
  const buySmallHandler = () => {
    ctx.addItem({
      ...props,
      size: "small",
      S: 1,
      M: 0,
      L: 0,
    });
    setSmallTshirts((preState) => preState - 1);
  };

  return (
    <>
      <li className="list-item">
        <span>{props.type}</span>
        <span>{props.description}</span>
        <span>₹{props.price}</span>
        <span className="sizeButtons">
          <button
            onClick={buyLargeHandler}
            disabled={largeTshirts === 0 ? true : false}
          >
            Buy Large {`(${largeTshirts})`}
          </button>
          <button
            onClick={buyMediumHandler}
            disabled={mediumTshirts === 0 ? true : false}
          >
            Buy Medium {`(${mediumTshirts})`}
          </button>
          <button
            onClick={buySmallHandler}
            disabled={smallTshirts === 0 ? true : false}
          >
            Buy Small {`(${smallTshirts})`}
          </button>
        </span>
      </li>
    </>
  );
};

export default ProductItem;
