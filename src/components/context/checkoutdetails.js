import React, { Component, useState } from "react";
import CheckoutContext from "./checkoutcontext";

function CheckoutContextProvider(props) {

  const [orderdetails, SetOrderDetails] = useState(
    {
      cart: null,
      discount: null
    }
  )

  const setCart = (value) => {
    // SetOrderDetails(...orderdetails, cart: value);
    SetOrderDetails(prevState => {
      return { ...prevState, cart: value }
    });
  };


  const setOrderDiscount = (value) => {
    // SetOrderDetails(...orderdetails, cart: value);
    SetOrderDetails(prevState => {
      return { ...prevState, discount: value }
    });
  };


  return (
    <CheckoutContext.Provider value={{ orderdetails, setCart: setCart, setOrderDiscount: setOrderDiscount }}>
      {props.children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutContextProvider;
