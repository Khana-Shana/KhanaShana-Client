import React from "react";
import "./menu.css";
import firebase_integration from "../fire.js";
import DiscountContext from "../context/context";
import { Link } from "react-router-dom";
import LandingCard from "./landingcard";

function Menu() {
  const [menuitems, setmenudetails] = React.useState([]);

  firebase_integration.database
    .collection("Menu")
    .limit(6)
    .onSnapshot((snapshot) => {
      /* Fetching 6 menu items from backend database 
    to be displayed on the menu on the landing page. */
      var menu_data = [];
      snapshot.forEach((doc) => {
        menu_data.push(doc.data());
      });
      setmenudetails(menu_data);
    });

  return (
    <div className="menu container-fluid">
      <div className="servicestitleleft">MENU</div>
      <div class="row">
        {menuitems.map((item) => {
          return (
            <div style={{ marginBottom: "3%" }} class="col-md-4 col-sm-">
              <div>
                <LandingCard
                  DishID={item.DishID}
                  Name={item.Name}
                  Description={item.Description}
                  SalePrice={item.SalePrice}
                  img={item.URL}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div class="butt-div">
        <Link to="/fullmenu">
          <button
            type="button"
            className="button-error pure-button"
            style={{
              backgroundColor: "#955f61",
              fontSize: "1.7rem",
              width: "16%",
              border: "none",
              fontFamily: "'Jost', sans-serif",
              marginTop: "0%",
              marginBottom: "3%",
              marginLeft: "80%",
            }}
          >
            FULL MENU
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
