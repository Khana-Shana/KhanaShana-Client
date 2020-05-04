import React, { Component, useState } from "react";
import OrderHistContext from "./orderhistcontext";

function OrderHistContextProvider(props) {
  const [orderdetails, setOrderDetails] = useState(null);

  const OrderHistory = (value) => {
    setOrderDetails(value);
  };

  return (
    <OrderHistContext.Provider value={{ orderdetails, OrderHistory: setOrderDetails }}>
      {props.children}
    </OrderHistContext.Provider>
  );
}

export default OrderHistContextProvider;
