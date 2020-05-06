import React, { useState } from "react";
import CheckoutContext from "./checkoutcontext";

/* creating a checkout context provider for child components */
function CheckoutContextProvider(props) {
  /*declaring state for order details*/
  const [orderdetails, SetOrderDetails] = useState({
    cart: null,
    discount: null,
    total: null,
    orderid: null,
  });

  /*setter functions for order details state */
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

  /* returning context provider for children along with orderdetails state and setter functions*/
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
