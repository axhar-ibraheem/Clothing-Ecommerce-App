import React from "react";
import ProductItem from "./ProductItem";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <ul>
        {props.shirtItems.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            type={item.tshirtType}
            description={item.description}
            price={item.price}
            large={item.large}
            medium={item.medium}
            small={item.small}
          ></ProductItem>
        ))}
      </ul>
    </div>
  );
};

export default Product;
