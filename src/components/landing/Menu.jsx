import React from "react";
import "./menu.css";
import firebase_integration from "../fire.js";
import DiscountContext from "../context/context";
import { Link } from "react-router-dom";
import LandingCard from "./landingcard";
function Menu() {
  let data = [
    {
      Name: "Burger",
      DishID: "1",
      SalePrice: "Rs.200",
      Description:
        " Lorem ipsum dolor sit amet, consectetur adipis elit. Sedsollicitudin quam dign issimerat mattis fringilla",
    },
    {
      Name: "Burger",
      DishID: "1",
      SalePrice: "Rs.200",
      Description:
        " Lorem ipsum dolor sit amet, consectetur adipis elit. Sedsollicitudin quam dign issimerat mattis fringilla",
    },
    {
      Name: "Burger",
      DishID: "1",
      SalePrice: "Rs.200",
      Description:
        " Lorem ipsum dolor sit amet, consectetur adipis elit. Sedsollicitudin quam dign issimerat mattis fringilla",
    },
    {
      Name: "Burger",
      DishID: "1",
      SalePrice: "Rs.200",
      Description:
        " Lorem ipsum dolor sit amet, consectetur adipis elit. Sedsollicitudin quam dign issimerat mattis fringilla",
    },
    {
      Name: "Burger",
      DishID: "1",
      SalePrice: "Rs.200",
      Description:
        " Lorem ipsum dolor sit amet, consectetur adipis elit. Sedsollicitudin quam dign issimerat mattis fringilla",
    },
    {
      Name: "Burger",
      DishID: "1",
      SalePrice: "Rs.200",
      Description:
        " Lorem ipsum dolor sit amet, consectetur adipis elit. Sedsollicitudin quam dign issimerat mattis fringilla",
    },
  ];
  return (
    <div className="menu container-fluid">
      <div className="servicestitleleft">MENU</div>
      {/* <div className="cards"> */}
      {/* <div class="container-fluid"> */}
        <div class="row pb-4">
          {data.map((item) => {
            return (
              <div class=" text-center col-md-4 col-sm-">
                <div>
                  <LandingCard
                    DishID={item.DishID}
                    Name={item.Name}
                    Description={item.Description}
                    SalePrice={item.SalePrice}
                    // img={item.URL}
                  />
                </div>
              </div>
            );
          })}
        </div>
      {/* </div> */}
      {/* </div> */}
      <div className="menubtn">
        <Link to="/fullmenu">
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
