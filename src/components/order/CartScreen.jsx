import React from "react";
import Header from "./navbar";
import Cart from "./cart";
import "./orderstyles.css";

/* renders Cart Screen and adds Header to top */
function CartScreen() {
  /* passing screen title and routing paths to header */
  return (
    <div class="cartback">
      <Header cart={true} title="CART" link="/fullmenu" /> <Cart />
    </div>
  );
}

export default CartScreen;
