import React from "react";
import LandingPage from "./landing/landingpage";
import Login from "./login/login";
// import MenuScreen from "./order/fullmenu";
// import ThankYou from "./order/ThankYou";
// import OrderHistory from './profile/OrderHistory';
// import  ProfileScreen from './profile/profilescreen';
import CSupport from './profile/custsupport';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import Cart from './order/cart';
import Checkout from './order/checkout.jsx';
import Menu from './order/menu.jsx';
import firebase_integration from "./fire";
import { Provider } from 'react-redux';
import store from './order/store.jsx';

// import "bootstrap/dist/css/bootstrap.min.css";

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
          <Route exact path="/fullmenu" component={Menu} />
          {/* <Route exact path = "/orderconfirmed" component = {ThankYou}/> */}
          {/* <Route exact path = "/orderhistory" component = {OrderHistory}/> */}
          {/* <Route exact path = "/myprofile" component = { ProfileScreen}/> */}
          <Route exact path = "/feedback" component = { CSupport}/>
          <Route exact path = "/cart" component = {Cart} />
          <Route exact path = "/checkout" component = {Checkout} />
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
