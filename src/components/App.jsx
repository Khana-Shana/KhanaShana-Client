import React from "react";
import LandingPage from "./landing/landingpage";
import Login from "./login/login";
import { connect } from "react-redux";
import { FetchItems } from "./order/actions/cart-actions";
import ThankYou from "./order/ThankYou";
import OrderHistory from "./profile/OrderHistory";
import OrderDetails from "./profile/OrderDetails";
import CustomerProfile from "./profile/CustomerProfile";
import CSupport from "./profile/custsupport";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import CartScreen from "./order/CartScreen";
import Checkout from "./order/checkout.jsx";
import MenuScreen from "./order/menuscreen";
import firebase_integration from "./fire";
import DiscountContextProvider from "./context/discount";
import CheckoutContextProvider from "./context/checkoutdetails";
import OrderHistContextProvider from "./context/orderhistdetails";
import ForgotPassword from "./login/forgotpassword";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import DailyDealContextProvider from "./context/dailydealdetails";

function App(props) {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: "30px",

    transition: transitions.SCALE,
    containerStyle: {
      zIndex: 100,
    },
  };

  useEffect(() => {
    firebase_integration.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <AlertProvider template={AlertTemplate} {...options}>
      <div>
        <Router>
          <Switch>
            <Route exact path="/loginpage" component={Login} />
            <Route exact path="/resetpassword" component={ForgotPassword} />

            <DiscountContextProvider>
              <DailyDealContextProvider>
                <CheckoutContextProvider>
                  <Route exact path="/" exact component={LandingPage} />
                  <Route exact path="/fullmenu" component={MenuScreen} />

                  <Route exact path="/cart" component={CartScreen} />
                  <Route exact path="/checkout" component={Checkout} />
                  <Route exact path="/orderconfirmed" component={ThankYou} />
                </CheckoutContextProvider>
              </DailyDealContextProvider>

              <OrderHistContextProvider>
                <Route exact path="/orderhistory" component={OrderHistory} />
                <Route exact path="/orderdetails" component={OrderDetails} />
              </OrderHistContextProvider>
              <Route exact path="/myprofile" component={CustomerProfile} />
              <Route exact path="/feedback" component={CSupport} />
            </DiscountContextProvider>
          </Switch>
        </Router>
      </div>
    </AlertProvider>
  ) : (
    <div id="loader">
      <CircularProgress />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FetchItems: (items) => {
      dispatch(FetchItems(items));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
