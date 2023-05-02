import React, { Fragment } from "react";
import "./Modal.css";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  return (
    <div className="overlay">
      <div className="overlay-content">{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop onClose={props.closeCart} />
      <Overlay>{props.children}</Overlay>
    </Fragment>
  );
};

export default Modal;
