import React, { useContext } from "react";

import ShoeContext from "../ContextApi/shoe-context";
import ShoeItem from "./ShoeItem";

const ShoeItems = (props) => {
  const ShoeCtx = useContext(ShoeContext);

  return (
    <div>
      <h4>List of Shoe Items</h4>
      <ul>
        {ShoeCtx.items.map((item) => (
          <ShoeItem item={item}/>
        ))}
      </ul>
    </div>
  );
};

export default ShoeItems;
