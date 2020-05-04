import React, { Component, useState } from "react";
import CheckoutContext from "./checkoutcontext";

function CheckoutContextProvider(props) {

  const [orderdetails, SetOrderDetails] = useState(
    {
      cart: null,
      discount: null,
      total: null
    }
  )

  const setCart = (value) => {
    
    SetOrderDetails(prevState => {
      return { ...prevState, cart: value }
    });
  };


  const setOrderDiscount = (value) => {
    
    SetOrderDetails(prevState => {
      return { ...prevState, discount: value }
    });
  };

  const setTotal = (value) => {
    
    SetOrderDetails(prevState => {
      return { ...prevState, total: value }
    });
  };


  return (
    <CheckoutContext.Provider value={{ orderdetails, setCart: setCart, setOrderDiscount: setOrderDiscount, setTotal: setTotal }}>
      {props.children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutContextProvider;
