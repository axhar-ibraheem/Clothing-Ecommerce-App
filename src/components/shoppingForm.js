import React, { useReducer } from "react";
import "./ShoppingForm.css";
import ShoppingInput from "./ShoppingInput";
import CartButton from "./Cart/CartButton";

const initialState = {
  id: Math.random(),
  tshirtType: "",
  description: "",
  price: "",
  large: "",
  medium: "",
  small: "",
};
const inputReducer = (state, action) => {
  if (action.type === "updateField") {
    return { ...state, [action.field]: action.value };
  } else if (action.type === "reset") {
    return initialState;
  }

  return state;
};

const ShoppingForm = (props) => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const inputChangeHandler = (event) => {
    const { name, value, type } = event.target;
    const fieldValue = type === "number" ? Number(value) : value;
    dispatch({ type: "updateField", field: name, value: fieldValue });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "reset" });
    if (state.tshirtType.trim().length > 0) {
      props.onAddItem(state);
    } else {
      alert("Please enter the required fields");
    }
  };
  return (
    <div className="shop-form">
      <form onSubmit={onSubmitHandler} className="shoppingForm">
        <ShoppingInput
          label="Tshirt Name"
          input={{
            id: "TshirtName",
            type: "text",
            name: "tshirtType",
            value: state.tshirtType,
          }}
          onChange={inputChangeHandler}
        />
        <ShoppingInput
          label="Description"
          input={{
            id: "description",
            type: "text",
            name: "description",
            value: state.description,
          }}
          onChange={inputChangeHandler}
        />
        <ShoppingInput
          label="Price"
          input={{
            id: "price",
            type: "number",
            name: "price",
            value: state.price,
          }}
          onChange={inputChangeHandler}
        />
        <ShoppingInput
          label="L"
          input={{
            id: "l",
            type: "number",
            name: "large",
            value: state.large,
          }}
          onChange={inputChangeHandler}
        />
        <ShoppingInput
          label="M"
          input={{
            id: "m",
            type: "number",
            name: "medium",
            value: state.medium,
          }}
          onChange={inputChangeHandler}
        />
        <ShoppingInput
          label="S"
          input={{
            id: "s",
            type: "number",
            name: "small",
            value: state.small,
          }}
          onChange={inputChangeHandler}
        />
        <button type="submit" className="prod-btn">
          Add Product
        </button>
      </form>
      <CartButton showCart={props.showCart}></CartButton>
    </div>
  );
};

export default ShoppingForm;
