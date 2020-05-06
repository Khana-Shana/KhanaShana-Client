import React, { Component, useState } from "react";
import CheckoutContext from "./checkoutcontext";

function CheckoutContextProvider(props) {
  const [orderdetails, SetOrderDetails] = useState({
    cart: null,
    discount: null,
    total: null,
    orderid: null,
  });

  const setCart = (value) => {
    SetOrderDetails((prevState) => {
      return { ...prevState, cart: value };
    });
  };

  const setOrderDiscount = (value) => {
    SetOrderDetails((prevState) => {
      return { ...prevState, discount: value };
    });
  };

  const setTotal = (value) => {
    SetOrderDetails((prevState) => {
      return { ...prevState, total: value };
    });
  };

  const setOrderID = (value) => {
    SetOrderDetails((prevState) => {
      return { ...prevState, orderid: value };
    });
  };

  return (
    <CheckoutContext.Provider
      value={{
        orderdetails,
        setCart: setCart,
        setOrderDiscount: setOrderDiscount,
        setTotal: setTotal,
        setOrderID: setOrderID,
      }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutContextProvider;
