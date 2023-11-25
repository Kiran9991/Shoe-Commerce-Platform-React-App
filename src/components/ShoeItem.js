import { useContext } from "react";
import ShoeContext from "../ContextApi/shoe-context";

const ShoeItem = (props) => {
  const CartCtx = useContext(ShoeContext);

  const matchId = (itemId) => {
    CartCtx.items.forEach((item) => {
      if (item.id.toString() === itemId) {
        return CartCtx.addCartItem(item);
      }
    });
  };

  const addLargeValue = (e) => {
    let itemId = e.target.value;
    matchId(itemId);
    console.log('large',CartCtx.cartItems);
  };

  const addMediumValue = (e) => {
    let itemId = e.target.value;
    matchId(itemId)
    console.log('medium',CartCtx.cartItems);
  };

  const addSmallValue = (e) => {
    let itemId = e.target.value;
    matchId(itemId)
    console.log('small',CartCtx.cartItems);
  };

  return (
    <li key={props.item.id}>
      {props.item.shoeName} - {props.item.description} - {props.item.price} -{" "}
      <button
        onClick={addLargeValue}
        value={props.item.id}
      >{`Large(${props.item.large})`}</button>{" "}
      <button onClick={addMediumValue}>{`Medium(${props.item.medium})`}</button>{" "}
      <button onClick={addSmallValue}>{`Small(${props.item.small})`}</button>{" "}
    </li>
  );
};

export default ShoeItem;
