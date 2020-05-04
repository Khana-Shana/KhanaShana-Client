import React, { Component } from "react";
import Wheel from "./Wheel";
import "./deals.css";
import firebase_integration from "../fire.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Deals extends Component {
  constructor() {
    super();
    this.places = ["10%", "20%", "30%", "10%", "20%", "30%"];
  }
  render() {
    return (
      <div className=" deals container-fluid">
        <div className="row pb-5">
          <div className="col-lg-6 col-sm wheelitem">
            <div className="wheeltitle">TRY YOUR LUCK</div>
            <div>
              <Wheel items={this.places} />
              {/* <wheel/> */}
            </div>
          </div>
          <div class="col-lg-6 col-sm">
            {/* <div class="row"> */}
              <div className=" row pt-4 dailydeals">
                <div className="dealcard rounded">
                  <img
                    id="deal1"
                    src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fhamburger-beside-fries-2271107.png?alt=media&token=77f41572-ed35-4b9a-b388-1b082632a766"
                    className="ddealimgfirst"
                    alt="food-deal"
                  />
                {/* </div> */}
                <Link to="/fullmenu">
                  <button
                    // href="/fullmenu"
                    type="button"
                    id="GFG"
                    className=" wdealbtn button-error pure-button "
                  >
                    Daily Deal
                  </button>
                </Link>
              </div>
            </div>
            {/* <div class="row"> */}
            <div className="row pt-4 weeklydeals">
              <div className="dealcard rounded">
                <img
                  id="deal1"
                  src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fhamburger-beside-fries-2271107.png?alt=media&token=77f41572-ed35-4b9a-b388-1b082632a766"
                  className="wdealimgfirst"
                  alt="food-deal"
                />
                <Link to="/fullmenu">
                  <button
                    // href="/fullmenu"
                    type="button"
                    id="GFG"
                    className=" wdealbtn button-error pure-button "
                  >
                    Weekly Deal
                  </button>
                </Link>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Deals;
