import React, { Component } from "react";
import Wheel from "./Wheel";
import './deals.css';
import firebase_integration from '../fire.js'

class Deals extends Component {
  constructor() {
    super();
    this.places = ["10%", "20%", "30%", "40%", "50%", "60%"];
  }
  render() {
    firebase_integration.getImageURL('deal1', 'Mehreen', '', 'hamburger-beside-fries-2271107.png')
    firebase_integration.getImageURL('deal2', 'Mehreen', '', 'hamburger-beside-fries-2271107.png')
    firebase_integration.getImageURL('dealwheel1', 'Mehreen', '', 'club-sandwich-served-on-chopping-board-1600711.png')
       
    return (
      <div className="grid-container">
        <div className="wheelitem">
          <div className="wheeltitle">TRY YOUR LUCK</div>
          <div>
            <Wheel items={this.places} />
          </div>
          <a
            type="button"
            id="GFG"
            href="/fullmenu"
            className="wheeldealbtn button-error pure-button "
          >
            Avail Discount
          </a>
        </div>
        <div className="dailydeals">
          <div className="dealcard rounded">
            <img
              id = "deal1"
              className="ddealimgfirst"
              alt="food-deal"
            />

            <a
              href="/fullmenu"
              type="button"
              id="GFG"
              className=" ddealbtn button-error pure-button"
            >
              Daily Deal
            </a>
          </div>
        </div>
        <div className="weeklydeals">
          <div className="dealcard rounded">
            <img
              id = "deal2"
              className="wdealimgfirst"
              alt="food-deal"
            />
            <svg
              className="bi bi-plus-circle plus"
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              fill="#955F61"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                clip-rule="evenodd"
              />
            </svg>
            <img
              id = "dealwheel1"
              className="wdealimgsecond"
              alt="food-deal"
            />
            <a
              href="/fullmenu"
              type="button"
              id="GFG"
              className=" wdealbtn button-error pure-button "
            >
              Weekly Deal
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Deals;
