import React, { Component, useState } from "react";
import DiscountContext from "./context";

/* discount provider function for child components*/
function DiscountContextProvider(props) {
  const [discount, setdsc] = useState(null);

  const setDiscount = (value) => {
    setdsc(value);
  };
  
  /* returning global discount state to child components along with setter function*/
  return (
    <DiscountContext.Provider value={{ discount, setDiscount: setdsc }}>
      {props.children}
    </DiscountContext.Provider>
  );
}

export default DiscountContextProvider;
