import React, { Component } from "react";
import Wheel from "./Wheel";
import "./deals.css";
import firebase_integration from "../fire.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Deals() {
  const [dailydeal, setdailydeal] = React.useState({});
  const [weeklydeal, setweeklydeal] = React.useState({});
  const [discountwheel, setdiscountwheel] = React.useState([]);

  React.useEffect(() => {
    /* Fetching deals information from the deals and discounts
    section on the Admin side. */
    firebase_integration.database
      .collection("Deals")
      .orderBy("DealType", "desc")
      .onSnapshot((snapshot) => {
        var data = [];
        snapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setweeklydeal(data[0]);
        setdailydeal(data[1]);
      });
    /* Fetching discount information from the discount wheel
    section on the Admins side. */
    firebase_integration.database
      .collection("DiscountWheel")
      .onSnapshot((snapshot) => {
        var data = [];
        snapshot.forEach((doc) => {
          data.push(doc.data().value);
        });
        var data_copy = data;
        var data = data.concat(data_copy);
        /* Setting discounts on the wheel to be displayed
        on the discount wheel on the Client side. */
        setdiscountwheel(data);
      });
  });

  return (
    <div className=" deals container-fluid">
      <div className="row pb-5">
        <div className="col-lg-6 col-sm wheelitem">
          <div className="wheeltitle">TRY YOUR LUCK</div>
          <div>
            <Wheel items={discountwheel} />
          </div>
        </div>
        <div class="col-lg-6 col-sm">
          <div className=" row pt-4 dailydeals">
            <div className="dealcard rounded">
              <img
                id="deal1"
                src={dailydeal.ImageURL}
                className="ddealimgfirst"
                alt="food-deal"
              />

              <Link to="/fullmenu">
                <button
                  id="GFG"
                  type="button"
                  className="button-error pure-button"
                  style={{
                    fontSize: "1.7rem",
                    width: "50%",
                    border: "none",
                    fontFamily: "'Jost', sans-serif",
                    marginTop: "3%",
                    marginLeft: "25%",
                    marginBottom: "3%",
                  }}
                >
                  Daily Deal
                </button>
              </Link>
            </div>
          </div>

          <div className="row pt-4 weeklydeals">
            <div className="dealcard rounded">
              <img
                id="deal1"
                src={weeklydeal.ImageURL}
                className="wdealimgfirst"
                alt="food-deal"
              />
              <Link to="/fullmenu">
                <button
                  id="GFG"
                  type="button"
                  className="button-error pure-button"
                  style={{
                    fontSize: "1.7rem",
                    width: "50%",
                    border: "none",
                    fontFamily: "'Jost', sans-serif",
                    marginTop: "3%",
                    marginLeft: "25%",
                    marginBottom: "3%",
                  }}
                >
                  Weekly Deal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
