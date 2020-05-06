import React from "react";
import Header from "./navbar";
import Cart from "./cart";
import DiscountContextProvider from "../context/discount";
import "./orderstyles.css";

function CartScreen() {
  return (
    <div class="cartback">
      <Header cart={true} title="CART" link="/fullmenu" />{" "}
      {/* Conditional rendering of the navbar according to the screen. */}
      <Cart />
    </div>
  );
}

export default CartScreen;
