import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import firebase_integration from "../fire.js";
import firebase from "../fire";
import "./deals.css";

function Deals(props) {
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
  async function selectItem(UserID) {
    value = Math.floor(Math.random() * discountwheel.length);
    console.log(value);
    setDiscountval(discountwheel[value]);
    console.log(discountval);
    console.log(discountwheel[value]);
    setdiscavail(true);
    var todaysDate = new Date();
    var disc = parseInt(
      discountwheel[value].substring(0, discountwheel[value].length - 1)
    );
    console.log(disc);

    firebase_integration.database
      .collection("CustomerDatabase")
      .doc(UserID.toString())
      .update({
        WheelUsed: true,
        DateWheelUsed: todaysDate,
        Discount: disc,
      });
  }

  return (
    <div
      style={{ width: "97.1%" }}
      className=" deals d-flex justify-content-center container-fluid"
    >
      <div className="row pb-5">
        <div className="col-lg-5 col-sm wheelitem">
          <div className="wheeltitle">TRY YOUR LUCK</div>
          <div>
            {discavail ? (
              <div className="disc dealcard rounded">
                <div class="discounts1">
                  <div class="entry1" style={{ textAlign: "center" }}>
                    {discountval}
                  </div>
                </div>
              </div>
            ) : (
              <div className="disc dealcard rounded">
                <div class="discounts">
                  <div class="entry" style={{ textAlign: "center" }}>
                    {discountwheel[0]}
                  </div>
                  <div class="entry" style={{ textAlign: "center" }}>
                    {discountwheel[1]}
                  </div>
                  <div class="entry" style={{ textAlign: "center" }}>
                    {discountwheel[2]}
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                id="GFG"
                onClick={() => {
                  if (!firebase.getCurrentUsername()) {
                    alert("Please login first");
                    props.history.replace("/loginpage");
                    return null;
                  } else {
                    var UserID = firebase_integration.auth.currentUser.uid;
                    firebase_integration.database
                      .collection("CustomerDatabase")
                      .where("CustomerID", "==", UserID.toString())
                      .get()
                      .then((docs) => {
                        var mydata = 0;
                        docs.forEach((doc) => {
                          mydata = doc.data();
                        });
                        if (mydata.WheelUsed === false) {
                          selectItem(UserID);
                        } else if (mydata.WheelUsed === true) {
                          setDiscountval("0%");
                          alert(
                            "Discount already availed. Try again next week!"
                          );
                        }
                      });
                  }
                }}
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

export default withRouter(Deals);
