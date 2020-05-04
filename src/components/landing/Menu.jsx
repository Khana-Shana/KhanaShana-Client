import React from "react";
import "./menu.css";
import firebase_integration from '../fire.js'
import DiscountContext from "../context/context";
import {Link} from 'react-router-dom';
function Menu() {
  return (
    <div className="menu">
      <div className="servicestitleleft">MENU</div>
      <div className="cards">
        <div className="singlecard1">
          <img
            id = "menuimg1"
            className="card-image"
            src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Ftaylor-kiser-POFG828-GQc-unsplash.jpg?alt=media&token=3b2eefe1-7526-4864-a941-f22147ef3068"
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
            src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fhamburger-beside-fries-2271107.jpg?alt=media&token=0b52a846-1030-4172-ab28-61064611d757"
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
            src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fclub-sandwich-served-on-chopping-board-1600711.jpg?alt=media&token=f1f0c21e-7d1e-41db-ab76-0dbccb626a8e"
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
            src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fappetizer-bowl-chili-close-up-286283.jpg?alt=media&token=ba47c82a-d9ea-4169-9e91-8bee61fb68d4"
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
            src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fbread-with-soup-2474661.jpg?alt=media&token=1c793c1b-04ae-4219-9ba2-1e5aaf40d6c0"
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
            src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fflat-lay-photography-of-pasta-served-in-white-plate-1487511.jpg?alt=media&token=4435bad0-bb36-4890-89f2-e0533882cd1a"
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
        <Link to = "/fullmenu">
        <a
          // href="/fullmenu"
          type="button"
          id="GFG"
          className="button-menu pure-button"
        >
          Full Menu
        </a>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
