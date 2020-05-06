import React, { useState } from "react";
import OrderHistContext from "./orderhistcontext";

/* order history provider function for child components*/
function OrderHistContextProvider(props) {
  const [orderdetails, setOrderDetails] = useState(null);

  const OrderHistory = (value) => {
    setOrderDetails(value);
  };

    /* returning order history provider for children along with order details and setter functions*/
  return (
    <OrderHistContext.Provider
      value={{ orderdetails, OrderHistory: setOrderDetails }}
    >
      {props.children}
    </OrderHistContext.Provider>
  );
}

export default OrderHistContextProvider;
