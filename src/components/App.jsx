import React from "react";
import LandingPage from "./landing/landingpage";
import Login from "./login/login";
// import MenuScreen from "./order/fullmenu";
import ThankYou from "./order/ThankYou";
import OrderHistory from './profile/OrderHistory';
import  CustomerProfile from './profile/CustomerProfile';
import CSupport from './profile/custsupport';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import CartScreen from './order/CartScreen';
import Checkout from './order/checkout.jsx';
import MenuScreen from './order/menuscreen';
import firebase_integration from "./fire";
import { Provider } from 'react-redux';
import store from './stores/store'

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase_integration.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <Provider store = {store}>
    <div>
      <Router>
        <Switch>
          <Route exact path="/" exact component={LandingPage} />
          <Route exact path="/loginpage" component={Login} />
          <Route exact path="/fullmenu" component={MenuScreen} />
          <Route exact path = "/orderconfirmed" component = {ThankYou}/>
          <Route exact path = "/orderhistory" component = {OrderHistory}/>
          <Route exact path = "/myprofile" component = { CustomerProfile}/>
          <Route exact path = "/feedback" component = { CSupport}/>
          <Route exact path = "/cart" component = {CartScreen} />
          <Route exact path = "/checkout" component = {Checkout} />
          {/* <Route exact path = "/prebooking" component = {PdfScreen} /> */}

        </Switch>
      </Router>
    </div>
   </Provider>
  ) : (
    <div id="loader">
      <CircularProgress />
    </div>
    
  );
}

export default App;
