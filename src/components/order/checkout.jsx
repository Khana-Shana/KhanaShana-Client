import React, { Fragment, useContext, useState } from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import Header from "./navbar";
import Footer from "../navigation/footer";
import { FetchCart, FetchTotal } from "./actions/cart-actions";
import DiscountContext from "../context/context";
import CheckoutContext from "../context/checkoutcontext";
import firebase_integration from "../fire.js";
import "./orderstyles.css";

function Checkout(props) {
  const alert = useAlert();

  /* Creating hooks to add state to our functional components and access the states from different components in the tree. */
  const { discount, setDiscount } = useContext(DiscountContext);
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [floor, setFloor] = useState("");
  const [deliverytype, setDeliveryType] = useState("");
  const [paymentMethod] = useState(
    "Cash on Delivery"
  ); /* Payment method is by default set to Cash on Delivery. */
  var orderid = "";

  const { orderdetails, setOrderID } = useContext(CheckoutContext);

  async function PlaceOrder() {
    /* Setting order details when the confirm button is clicked. */
    var CustomerID = firebase_integration.auth.currentUser.uid;
    var TodaysDate = new Date();
    var Address = floor + " " + address + " " + area;
    var DishNames = [];
    var DishQuantities = [];

    /* Looping over the items in the cart to extract their names and quantities. */
    orderdetails.cart.map((item) => DishNames.push(item.Name));
    orderdetails.cart.map((item) => DishQuantities.push(item.quantity));
    var instructions = document.getElementById("instruction-box").value;
    if (instructions === "") {
      instructions = "None";
    }
    var placeorder = await firebase_integration.database
      .collection("RegularOrder")
      .add({
        CustomerID: CustomerID,
        Date: TodaysDate,
        Action: "Accept/Reject",
        Address: Address,
        Discount: discount,
        DishName: DishNames,
        DishQuantity: DishQuantities,
        OrderType: deliverytype,
        Subtotal: orderdetails.total,
        Tracking: "Pending",
        MobileNumber: number,
        SpecialInstruction: instructions,
        OrderID: "Not Assigned",
      })
      .then(function (docRef) {
        let promise = new Promise(() => {
          orderid = docRef.id;
        });
        promise.then(setOrderID(docRef.id));
        firebase_integration.database
          .collection("RegularOrder")
          .doc(orderid.toString())
          .update({
            OrderID: orderid,
          });

        localStorage.setItem(
          "cart",
          []
        ); /* Setting the cart object in the local storage and reducer to empty after the order is placed. */
        props.FetchCart([]);
        localStorage.setItem(
          "total",
          0
        ); /* Setting the total bill in the local storage and reducer to 0 after the order is placed. */
        props.FetchTotal(0);
        props.history.replace(
          "./orderconfirmed"
        ); /*redirecting users to orderconfirmed screen */
      });
  }

  function checkInputField() {
    if (number === "" || address === "" || area === "") {
      /* Validation checks to ensure that the customer fills in these fields before checking out. */
      alert.show("Please fill in all the fields.");
      return false;
    }
    if (number.length !== 11) {
      alert.show(
        "Mobile number must be 11 characters long."
      ); /* Validation check to ensure that the mobile number entered is exactly 11 characters long. */
      return false;
    } else {
      return true;
    }
  }

  return (
    <div class="menuback">
      <Header title="CHECKOUT" link="/cart" />
      <div class="forms">
        <div name="your-details">
          <h3>
            <strong>Your Details:</strong>
          </h3>
        </div>
        <form>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            required
          />
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            name="address"
            placeholder="Street Address"
            required
          />
          <br />
          <input
            value={area}
            onChange={(e) => setArea(e.target.value)}
            type="text"
            name="area"
            placeholder="Area"
            required
          />
          <input
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            type="text"
            name="floor"
            placeholder="Floor/Unit"
            required
          />
        </form>
        <br /> <br /> <br /> <br />
        <div class="instructions">
          <h3>
            <strong>Special Instructions:</strong>
          </h3>
        </div>
        <textarea
          maxlength="700"
          id="instruction-box"
          class="text-area"
          placeholder="Write your text here"
        ></textarea>
        <br /> <br /> <br /> <br />
        <div>
          <h3>
            <strong>Order Type:</strong>
          </h3>
        </div>
        <div name="order-type-checkout">
          <input
            value={deliverytype}
            onChange={(e) => setDeliveryType("Delivery")}
            type="radio"
            name="method"
          />
          <label>Delivery</label>
          <br />
          <input
            value={deliverytype}
            onChange={(e) => setDeliveryType("Takeaway")}
            type="radio"
            name="method"
          />
          <label>Takeaway</label>
        </div>
        <div>
          <h3>
            <strong>Select a payment method:</strong>
          </h3>
        </div>
        <div name="payment">
          <input type="checkbox" checked="checked" name="method" />
          <label>Cash on Delivery</label>
          <div class="confirm">
            {/* Store Order Details to database on button click after verifying that the required input fields of the form have been filled */}
            <button
              onClick={() => {
                if (checkInputField()) {
                  PlaceOrder();
                }
              }}
              type="submit"
              class="btn btn-success btn-lg"
            >
              CONFIRM
            </button>
          </div>
          <br />
        </div>
      </div>
      <br /> <br /> <br /> <br />
      <Footer />
    </div>
  );
}

/* connects dispatcher functions for fetching cart and total from the reducer to our Checkout Component and arguments required */

const mapDispatchToProps = (dispatch) => {
  return {
    FetchCart: (items) => {
      dispatch(FetchCart(items));
    },
    FetchTotal: (total) => {
      dispatch(FetchTotal(total));
    },
  };
};

export default connect(null, mapDispatchToProps)(Checkout);
