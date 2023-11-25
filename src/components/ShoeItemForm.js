import React, { useContext, useRef } from "react";
import ShoeContext from "../ContextApi/shoe-context";

const ShoeItemForm = (props) => {
    const ShoeCtx = useContext(ShoeContext);
  const enteredName = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const largeRef = useRef();
  const mediumRef = useRef();
  const smallRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const nameValue = enteredName.current.value;
    const descriptionValue = descriptionRef.current.value;
    const priceValue = priceRef.current.value;
    const largeValue = largeRef.current.value;
    const mediumValue = mediumRef.current.value;
    const smallValue = smallRef.current.value;

    const formData = {
        id: Math.random(),
      shoeName: nameValue,
      description: descriptionValue,
      price: priceValue,
      large: largeValue,
      medium: mediumValue,
      small: smallValue,
    };

    ShoeCtx.addItem(formData);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label>Shoe Name</label>
      <input id="shoeName" type="text" ref={enteredName} />
      <label>Description</label>
      <input id="description" type="text" ref={descriptionRef} />
      <label>Price</label>
      <input id="price" type="number" ref={priceRef} />
      <label>Quantity Available</label>
      <br />
      <label>Large:-</label>
      <input type="number" id="large" ref={largeRef} />
      <label>Medium:-</label>
      <input type="number" id="medium" ref={mediumRef} />
      <label>Small:-</label>
      <input type="number" id="small" ref={smallRef} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ShoeItemForm;
