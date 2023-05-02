import React, { Fragment } from "react";
import "./ShoppingInput.css";
const ShoppingInput = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        className={props.input.type === "number" ? "sizeField" : ""}
        {...props.input}
        onChange={props.onChange}
      />
    </Fragment>
  );
};

export default ShoppingInput;
