import React, { Component, useState } from "react";
import DiscountContext from "./context";

function DiscountContextProvider(props) {
  const [discount, setdsc] = useState(null);

  const setDiscount = (value) => {
    setdsc(value);
  };

  return (
    <DiscountContext.Provider value={{ discount, setDiscount: setdsc }}>
      {props.children}
    </DiscountContext.Provider>
  );
}

export default DiscountContextProvider;
