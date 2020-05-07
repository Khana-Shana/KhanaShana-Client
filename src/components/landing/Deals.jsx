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

  React.useEffect(
    () => {
      /* Fetching deals information from the deals and discounts
    section on the Admin side. */
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
          var data = data.concat(data_copy);
          setdiscountwheel(data);
        });
    },
    dailydeal,
    weeklydeal,
    discountwheel
  );

  return (
    <div className=" deals container-fluid">
      <div className="row pb-5">
        <div className="col-lg-6 col-sm wheelitem">
          <div className="wheeltitle">TRY YOUR LUCK</div>

          <div>
            <Wheel setbutton={setbutton} items={discountwheel} />
            <div>
              {button ? (
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
                      marginTop: "8%",
                      marginLeft: "25%",
                    }}
                  >
                    Avail Discount
                  </button>
                </Link>
              ) : (
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
                  disabled
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
