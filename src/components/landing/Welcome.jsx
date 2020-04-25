import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./welcome.css";

function Welcome() {
  return (
    <div className="container-fluid welcome">
      <div className="row">
        <div className="col-sm">
          <div className="left-side h-75">
            <div className="Title">KHANA SHANA</div>
            <div className="Text">
              Do you want to eat something delicious, special and healthy? Worry
              not! We are sincerely for your service. Welcome your arrival!
            </div>
            <div className="orderbtn">
              <a
                id="GFG"
                type="button"
                href="/fullmenu"
                className="button-error pure-button"
              >
                Place Order!
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="right-side">
            <img
              id="womancook"
              src="./images/WomanCook.svg"
              className="img-fluid"
              alt="Woman Cooking"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
