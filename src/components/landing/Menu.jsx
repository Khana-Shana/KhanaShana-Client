import React from "react";
import "./menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="servicestitleleft">MENU</div>
      <div className="cards">
        <div className="singlecard1">
          <img
            src="./images/taylor-kiser-POFG828-GQc-unsplash.jpg"
            className="card-image"
          />
          <div className="card-content">
            <div className="dish-name"> Burger </div>
            <div className="dish-price"> PKR 550 </div>
            <div className="dishdescription">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sed
              sollicitudin quam dign issimerat mattis fringilla.
            </div>
          </div>
        </div>

        <div className="singlecard2">
          <img
            src="./images/hamburger-beside-fries-2271107.jpg"
            className="card-image"
          />
          <div className="card-content">
            <div className="dish-name"> Burger </div>
            <div className="dish-price"> PKR 550 </div>
            <div className="dishdescription">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sed
              sollicitudin quam dign issimerat mattis fringilla.
            </div>
          </div>
        </div>

        <div className="singlecard3">
          <img
            src="./images/club-sandwich-served-on-chopping-board-1600711.jpg"
            className="card-image"
          />
          <div className="card-content">
            <div className="dish-name"> Burger </div>
            <div className="dish-price"> PKR 550 </div>
            <div className="dishdescription">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sed
              sollicitudin quam dign issimerat mattis fringilla.
            </div>
          </div>
        </div>

        <div className="singlecard4">
          <img
            src="./images/appetizer-bowl-chili-close-up-286283.jpg"
            className="card-image"
          />
          <div className="card-content">
            <div className="dish-name"> Burger </div>
            <div className="dish-price"> PKR 550 </div>
            <div className="dishdescription">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sed
              sollicitudin quam dign issimerat mattis fringilla.
            </div>
          </div>
        </div>

        <div className="singlecard5">
          <img
            src="./images/bread-with-soup-2474661.jpg"
            className="card-image"
          />
          <div className="card-content">
            <div className="dish-name"> Burger </div>
            <div className="dish-price"> PKR 550 </div>
            <div className="dishdescription">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sed
              sollicitudin quam dign issimerat mattis fringilla.
            </div>
          </div>
        </div>

        <div className="singlecard6">
          <img
            src="./images/flat-lay-photography-of-pasta-served-in-white-plate-1487511.jpg"
            className="card-image"
          />
          <div className="card-content">
            <div className="dish-name"> Burger </div>
            <div className="dish-price"> PKR 550 </div>
            <div className="dishdescription">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sed
              sollicitudin quam dign issimerat mattis fringilla.
            </div>
          </div>
        </div>
      </div>
      <div className="menubtn">
        <a
          href="/fullmenu"
          type="button"
          id="GFG"
          className="button-menu pure-button"
        >
          Full Menu
        </a>
      </div>
    </div>
  );
}

export default Menu;
