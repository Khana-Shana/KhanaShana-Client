import React from "react";
import "./menu.css";
import firebase_integration from '../fire.js'
import DiscountContext from "../context/context";

function Menu() {
  firebase_integration.getImageURL('menuimg1', 'Mehreen', '', 'taylor-kiser-POFG828-GQc-unsplash.jpg')
  firebase_integration.getImageURL('menuimg2', 'Mehreen', '', 'hamburger-beside-fries-2271107.jpg')
  firebase_integration.getImageURL('menuimg3', 'Mehreen', '', 'club-sandwich-served-on-chopping-board-1600711.jpg')
  firebase_integration.getImageURL('menuimg4', 'Mehreen', '', 'appetizer-bowl-chili-close-up-286283.jpg')
  firebase_integration.getImageURL('menuimg5', 'Mehreen', '', 'bread-with-soup-2474661.jpg')
  firebase_integration.getImageURL('menuimg6', 'Mehreen', '', 'flat-lay-photography-of-pasta-served-in-white-plate-1487511.jpg')
  
  return (
    <div className="menu">
      <div className="servicestitleleft">MENU</div>
      <div className="cards">
        <div className="singlecard1">
          <img
            id = "menuimg1"
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
            id = "menuimg2"
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
            id = "menuimg3"
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
            id = "menuimg4"
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
            id = "menuimg5"
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
            id = "menuimg6"
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
