import React from "react";
import { Link } from "react-router-dom";
import LandingCard from "./landingcard";
import firebase_integration from "../fire.js";
import "./menu.css";

function Menu() {
  /* state for setting menu read from local storage */
  const [menuitems, setmenudetails] = React.useState([]);
  try{
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
  }
  catch(error) {
    alert("An error occured. Please try again");
  };

  return (
    /* Creating a container that contains the six items for display. */
    <div style = {{paddingLeft:"0%", width: "97.1%"}} className="menu container-fluid">
      <div className="servicestitleleft">MENU</div>
      <div class = "container d-flex justify-content-center">
      <div class="row">
        {menuitems.map((item) => {
          return (
            <div style={{ marginBottom: "3%" }} class="col-md-3 ml-5 col-sm-">
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
