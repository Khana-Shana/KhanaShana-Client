/* credit for wheel spin: https://github.com/hadriengerard/spinning-wheel-game-react?files=1 */
/* we modified the code to suit our requirements */

import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withAlert } from "react-alert";
import DiscountContext from "../context/context";
import firebase_integration from "../fire.js";
import firebase from "../fire";
import "./deals.css";

class Wheel extends React.Component {
  /* access discount context */
  static contextType = DiscountContext;

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedItem: null,
      button: false,
    };
    this.selectItem = this.selectItem.bind(this);
    this.run = false;
    this.value = 0;
    this.i = 0;
    this.buttondisable = false;
  }

  /* wheel spin function, selects a random value from array at which wheel stops */
  selectItem() {
    this.value = Math.floor(Math.random() * this.props.items.length);
    this.setState({ selectedItem: this.value });
  }

  render() {
    const alert = this.props.alert;
    const { selectedItem, button } = this.state;
    const { history, items } = this.props;
    const wheelVars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    };
    const spinning = selectedItem !== null ? "spinning" : "";

    /* set discount if conditions valid */
    const givediscount = (resolvepromise) => {
      if (resolvepromise === true) {
        this.context.setDiscount(this.props.items[this.value]);
      } else {
        alert.show("Discount already availed. Please try again next week!");
      }
    };

    return (
      <div className="wheel-container">
        <div
          className={`wheel ${spinning}`}
          style={wheelVars}
          onClick={() => {
            /* check if user logged in */
            if (!firebase.getCurrentUsername()) {
              alert.show("Please login first");
              this.props.history.replace("/loginpage");
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
                  /* check if wheel already used in last 7 days */
                  if (mydata.WheelUsed === false) {
                    let promise = new Promise(() => {
                      this.selectItem();
                    });
                    promise.then(givediscount(true));
                    var todaysDate = new Date();
                    var disc = parseInt(
                      this.props.items[this.value].substring(
                        0,
                        this.props.items[this.value].length - 1
                      )
                    );
                    firebase_integration.database
                      .collection("CustomerDatabase")
                      .doc(UserID.toString())
                      .update({
                        WheelUsed: true,
                        DateWheelUsed: todaysDate,
                        Discount: disc,
                      });
                    this.setState({ button: true });
                  } else if (mydata.WheelUsed === true) {
                    /* disable wheel spin */
                    this.context.setDiscount("0%");
                    alert.show(
                      "Discount already availed. Try again next week!"
                    );

                    this.setState({ button: false });
                  }
                });
            }
          }}
        >
          {items.map((item, index) => (
            <div
              className="wheel-item"
              key={index}
              style={{ "--item-nb": index }}
            >
              {item}
            </div>
          ))}
        </div>

        <div>
          {button ? (
            <Link to="/fullmenu">
              <button
                id="GFG"
                type="button"
                className="button-error pure-button"
                style={{
                  fontSize: "1.7rem",
                  width: "70%",
                  border: "none",
                  fontFamily: "'Jost', sans-serif",
                  marginTop: "8%",
                  marginLeft: "16%",
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
                width: "70%",
                border: "none",
                fontFamily: "'Jost', sans-serif",
                marginTop: "8%",
                marginLeft: "16%",
              }}
              disabled
            >
              Avail Discount
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(withAlert()(Wheel));
