import React from "react";

import ShoeItemForm from "./components/ShoeItemForm";
import ShoeProvider from "./ContextApi/ShoeProvider";
import ShoeItems from "./components/ShoeItems";
import HeaderCartButton from "./components/Layout/HeaderCartButton";

function App() {
  return (
    <ShoeProvider>
      <HeaderCartButton/>
      <ShoeItemForm />
      <ShoeItems/>
    </ShoeProvider>
  );
}

export default App;
