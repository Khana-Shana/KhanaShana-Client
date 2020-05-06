import React, { Fragment, useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
  FetchCart,
  FetchItems,
  FetchTotal,
} from "./actions/cart-actions";
import "./orderstyles.css";
import firebase_integration from "../fire";
import CheckoutContext from "../context/checkoutcontext";

function Cart(props) {

  /* function declarations to get Menu, Cart, and Total amount of bill from localstorage */
  
  function getMenu() {
    const localmenu = localStorage.getItem("menu");
    return localmenu ? JSON.parse(localmenu) : [];
  }

  function getLocal() {
    const localtotal = localStorage.getItem("total");
    return localtotal ? JSON.parse(localtotal) : [];
  }

  function getCart() {
    const localcart = localStorage.getItem("cart");
    return localcart ? JSON.parse(localcart) : [];
  }

  /* function declarations to dispatch actions to functions for the reducer */

  function handleRemove(id) {
    props.removeItem(id);
  }

  function handleAddQuantity(id) {
    props.addQuantity(id);
  }

  function handleSubtractQuantity(id) {
    props.subtractQuantity(id);
  }

  /* declaring variables to get cart from local storage and to access the discount available to user */

  var localcart = [];
  var discount_price = 0;
  var discount_bill = 0;

  const [userdisc, setdisc] = useState(0);
  const { setCart, setTotal } = useContext(CheckoutContext);

  /* restoring menu existing in local storage into the variable localmenu */

  const localmenu = getMenu();

  /* using reducer functions to set state of "menu" and "cart" reducers globally*/

  useEffect(() => {
    props.FetchItems(localmenu);
  }, []);

  useEffect(() => {
    /* restoring cart and total from local storage into the variables */
    localcart = getCart();
    let localtotal = getLocal();

    if (props.items.length === 0 && localcart !== []) {
      props.FetchCart(...props.items, localcart);
      props.FetchTotal(localtotal);
    }
  }, []);

  /* reading discount available to user from database and setting state */

  useEffect(() => {
    var UserID = firebase_integration.auth.currentUser.uid;
    firebase_integration.database
      .collection("CustomerDatabase")
      .where("CustomerID", "==", UserID.toString())
      .onSnapshot((docs) => {
        var mydata = 0;
        docs.forEach((doc) => {
          mydata = doc.data().Discount;
        });
        setdisc(mydata);
      });
  }, []);

  discount_price = userdisc;

  /* maps products in cart from the reducer for display on the cart interface */

  let productsinCart = props.items.map((item) => {
    return (
      <div>
        <Fragment>
          <div class="product row">
            <div class="delete-icon col-sm-">
              <ion-icon
                onClick={() => {
                  handleRemove(item.DishID);
                }}
                name="trash-outline"
                class="remove"
              ></ion-icon>
            </div>
            <div class="col-sm-">
              <img class="imgcolumn" src={item.URL} />
            </div>
            <div class="name-col col-md-">
              <div class="pname">{item.Name}</div>
              <div class="quantity">
                <ion-icon
                  onClick={() => {
                    handleAddQuantity(item.DishID);
                  }}
                  name="add-circle-outline"
                  class="increase"
                >
                  +
                </ion-icon>
                {item.quantity}
                <ion-icon
                  onClick={() => {
                    handleSubtractQuantity(item.DishID);
                  }}
                  name="remove-circle-outline"
                  class="decrease"
                >
                  -
                </ion-icon>
              </div>
            </div>
            <div class="price-col col-md-">
              <div class="priceee">Rs {item.SalePrice}</div>
              <div class="timerrr">{item.PrepTime}</div>
            </div>
          </div>
        </Fragment>
      </div>
    );
  });

  /* maps all order details for display on the cart interface */

  let productsBill = props.items.map((item) => {
    return (
      <Fragment>
        <div class="product-bill row">
          <div class="item col-md-">
            <div class="item-name">{item.Name}</div>
          </div>
          <div class="item-nums col-md-">
            <div class="nums">x {item.quantity}</div>
          </div>
          <div class="item-subtotal col-md-">
            <div class="subtotal">Rs {item.quantity * item.SalePrice}</div>
          </div>
        </div>
      </Fragment>
    );
  });

  /* calculating discounted bill */

  discount_bill = ((100 - discount_price) * (props.total + 100)) / 100;

  /* returns order details, product bill for rendering */
  /* checkout button is disabled if cart is empty */

  return (
    <div class="order">
      <div class="order-details01">
        <b>ORDER DETAILS</b>
      </div>
      <div class="container-products">
        <div class="products">{productsinCart}</div>
      </div>
      <div class="container-bill">
        <div class="order-now">ORDER NOW</div>
        <div class="prod-cont">{productsBill}</div>

        <div class="extra-cont">
          <div class="ddetails">
            <div class="delivery"> Delivery</div>
            <p class="delivery-cost">Rs 100</p>
          </div>
          <div class="discount">
            <div class="discount-title">Discount</div>
            <p class="discount-price">{discount_price}%</p>
          </div>
        </div>
        <br />
        <div class="basketTotalContainer">
          <p class="basketTotalTitle">Total</p>
          <p class="basketTotal">Rs {props.total + 100}</p>
        </div>
        <div class="discountContainer">
          <p class="discountedBill">Discounted Total</p>
          <p class="discountedTotal">Rs {discount_bill}</p>
        </div>

        {props.items.length !== 0 ? (
          <Link to="/checkout">
            <div class="check">
              <button
                onClick={() => {
                  setCart(props.items);
                  setTotal(props.total);
                }}
                type="button"
                class="btn btn-success btn-lg"
              >
                CHECKOUT
              </button>
            </div>
          </Link>
        ) : (
          <div class="check">
            <button type="button" class="btn btn-success btn-lg" disabled>
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* maps cart and total from reducer to our Cart component */
/* this function is called every time when the Redux store state changes */

const mapStateToProps = (state) => {
  return {
    items: state.cart,
    total: state.total,
  };
};

/* connects dispatcher functions for different action.types from the reducer to our cart Component and arguments required */

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
    FetchCart: (items) => {
      dispatch(FetchCart(items));
    },
    FetchItems: (items) => {
      dispatch(FetchItems(items));
    },
    FetchTotal: (total) => {
      dispatch(FetchTotal(total));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
