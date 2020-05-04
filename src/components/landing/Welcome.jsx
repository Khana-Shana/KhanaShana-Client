import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./welcome.css";
import firebase_integration from '../fire.js'

function Welcome() {
  return (
    <div className="container-fluid welcome">
      <div className="row">
        <div className="col-lg-6">
        <div className="left-side">
            <div className="Title">KHANA SHANA</div>
            <div className="container Textwelc">
              Do you want to eat something delicious, special and healthy? Worry
              not! We are sincerely for your service. Welcome your arrival!
            </div>
            <div className="orderbtn">
            <Link to = "/fullmenu">
              <button
                id="GFG"
                type="button"
                className="button-error pure-button"
              >
                Place Order!
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-side">
            <img
              id="womancookwelcome"
              className="img-fluid"
              alt="Woman Cooking"
              src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2FWomanCook.svg?alt=media&token=e0f6a486-76ee-4a06-a152-b0fe8e70748c"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
