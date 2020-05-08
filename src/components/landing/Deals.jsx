import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Wheel from "./Wheel";
import firebase_integration from "../fire.js";
import DailyDealContext from "../context/dailydealcontext";
import "./deals.css";

function Deals() {
  /* access context to set deal for menu */
  const { setDaily } = useContext(DailyDealContext);
  const [button, setbutton] = React.useState(false);

  /* states for reading deal details from database */
  const [dailydeal, setdailydeal] = React.useState({});
  const [weeklydeal, setweeklydeal] = React.useState({});
  const [discountwheel, setdiscountwheel] = React.useState([]);
  const [discountval, setDiscountval] = React.useState(0);
  const [discavail, setdiscavail] = React.useState(false);

  React.useEffect(
    () => {
      /* Fetching deals information from the deals and discounts
    section on the Admin side. */
      try {
        firebase_integration.database
          .collection("Deals")
          .orderBy("DealType", "desc")
          .onSnapshot((snapshot) => {
            var data = [];
            snapshot.forEach((doc) => {
              data.push(doc.data());
            });
            setweeklydeal(data[0]);
            setdailydeal(data[1]);
          });
        firebase_integration.database
          .collection("DiscountWheel")
          .onSnapshot((snapshot) => {
            var data = [];
            snapshot.forEach((doc) => {
              data.push(doc.data().value);
            });
            var data_copy = data;
            var data = data_copy;
            setdiscountwheel(data);
          });
      } catch (error) {
        alert("An error occured. Please try again");
      }
    },
    dailydeal,
    weeklydeal,
    discountwheel
  );
  let value = 0;
  let discount = 0;
  function selectItem() {
    value = Math.floor(Math.random() * discountwheel.length);
    setDiscountval(discountwheel[value]);
    setdiscavail(true);

  }

  return (
    <div style = {{width:"97.1%"}} className=" deals d-flex justify-content-center container-fluid">
      <div className="row pb-5">
        <div className="col-lg-5 col-sm wheelitem">
          <div className="wheeltitle">TRY YOUR LUCK</div>

          <div>

{discavail ?
  <div className = "disc dealcard rounded">
<div class = "discounts1">
  <div class = "entry1" style = {{textAlign:"center"}}>{discountval}</div>
</div>
</div>
:
<div className = "disc dealcard rounded">
<div class = "discounts">
  <div class = "entry" style = {{textAlign:"center"}}>{discountwheel[0]}</div>
  <div class = "entry" style = {{textAlign:"center"}}>{discountwheel[1]}</div>
  <div class = "entry" style = {{textAlign:"center"}}>{discountwheel[2]}</div>
</div>
</div>
}
 
            <div>
              {discavail ? (
                // <Link to="/fullmenu">
                  <button
                    id="GFG"
                    type="button"
                    className="button-error pure-button"
                    style={{
                      fontSize: "1.7rem",
                      width: "50%",
                      border: "none",
                      fontFamily: "'Jost', sans-serif",
                      marginTop: "8%",
                      marginLeft: "25%",
                    }}
                  disabled>
                    Avail Discount
                  </button>
                // </Link>
              ) : (
                <button
                  id="GFG"
                  onClick = {selectItem}
                  type="button"
                  className="button-error pure-button"
                  style={{
                    fontSize: "1.7rem",
                    width: "50%",
                    border: "none",
                    fontFamily: "'Jost', sans-serif",
                    marginTop: "8%",
                    marginLeft: "25%",
                  }}
                >
                  Avail Discount
                </button>
              )}
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm">
          <div className=" row pt-4 dailydeals">
            <div className="dealcard rounded">
              <img
                id="deal1"
                src={dailydeal.URL}
                className="ddealimgfirst"
                alt="food-deal"
              />

              <Link to="/fullmenu">
                <button
                  id="GFG"
                  type="button"
                  className="button-error pure-button"
                  style={{
                    fontSize: "1.7rem",
                    width: "50%",
                    border: "none",
                    fontFamily: "'Jost', sans-serif",
                    marginTop: "3%",
                    marginLeft: "25%",
                    marginBottom: "3%",
                  }}
                >
                  Daily Deal
                </button>
              </Link>
            </div>

            <div className="row pt-4 weeklydeals">
              <div className="dealcard rounded">
                <img
                  id="deal1"
                  src={weeklydeal.URL}
                  className="wdealimgfirst"
                  alt="food-deal"
                />
                <Link to="/fullmenu">
                  <button
                    id="GFG"
                    type="button"
                    className="button-error pure-button"
                    style={{
                      fontSize: "1.7rem",
                      width: "50%",
                      border: "none",
                      fontFamily: "'Jost', sans-serif",
                      marginTop: "3%",
                      marginLeft: "25%",
                      marginBottom: "3%",
                    }}
                  >
                    Weekly Deal
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
