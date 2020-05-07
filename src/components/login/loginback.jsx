import React from "react";
import { connect } from "react-redux";
import { FacebookLoginButton } from "react-social-login-buttons";
import { Link, withRouter } from "react-router-dom";
import { FetchItems } from "../order/actions/cart-actions";
import { useState } from "react";
import { withAlert } from "react-alert";
import { useAlert } from "react-alert";
import firebase_integration from "../fire";
import ReactCardFlip from "react-card-flip";
import SignupBack from "./signupback";
import SignupFront from "./signupfront";
import MenuContext from "../context/menucontext";
import LoginFront from "./loginfront";

import "./loginstyles.css";

function LoginBack(props) {
  /* create states for flipping card and form inputs */
  const alert = useAlert();
  const [isFlipped, setState] = useState(false);
  const { setMenu } = React.useContext(MenuContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  /* flip card on click */
  function handleClick(e) {
    e.preventDefault();
    setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  return (
    <div className="cont">
      <div className="row">
        <Link to="/">
          <img
            className="main-back"
            src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fback.svg?alt=media&token=892f9aa1-0870-4e45-8702-274068648e22"
          />
        </Link>
        <div className="col-lg- leftcard">
          {/* component one for card flip */}
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="logcardback1">
              <div className="button-position">
                <label className="login-button">
                  <input type="checkbox" />
                  <span className="back">
                    <div className="butt"></div>
                    <span className="toggle"></span>
                    <span className="label on">LOGIN</span>
                    <span onClick={handleClick} className="label off">
                      SIGN UP
                    </span>
                  </span>
                </label>
              </div>
              <div className="login-text">WELCOME BACK!</div>
              <div className="form-div">
                <div className="modal-dialog modal-login">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">LOGIN WITH EMAIL</h4>
                    </div>
                    <div className="modal-body">
                      <form
                        action="/examples/actions/confirmation.php"
                        method="post"
                        onSubmit={(e) => e.preventDefault() && false}
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            required="required"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required="required"
                            value={password}
                            onChange={(p) => setPassword(p.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="submit"
                            className="btn btn-primary btn-block btn-lg"
                            value="Sign in"
                            onClick={() => {
                              login();
                              /* reading menu from database on customer login and setting its context*/
                              var menudata = [];

                              firebase_integration.database
                                .collection("Menu")
                                .get()
                                .then((docs) => {
                                  docs.forEach((doc) => {
                                    menudata.push(doc.data());
                                  });
                                  setMenu(menudata);
                                });
                            }}
                          />
                        </div>
                      </form>
                      <p className="hint-text medium">
                        <Link to="/resetpassword">
                          <a>Forgot Your Password?</a>
                        </Link>
                      </p>
                      {/* sign in with facebook and add customer details to database*/}
                      <FacebookLoginButton
                        onClick={() =>
                          firebase_integration
                            .doSignInWithFacebook()
                            .then((socialAuthUser) => {
                              var menudata = [];

                              firebase_integration.database
                                .collection("Menu")
                                .get()
                                .then((docs) => {
                                  docs.forEach((doc) => {
                                    menudata.push(doc.data());
                                  });
                                  props.FetchItems(menudata);
                                });
                              var year = socialAuthUser.additionalUserInfo.profile.birthday.substring(
                                6,
                                10
                              );
                              var month = parseInt(
                                socialAuthUser.additionalUserInfo.profile.birthday.substring(
                                  0,
                                  2
                                ) - 1
                              ).toString();
                              var day = socialAuthUser.additionalUserInfo.profile.birthday.substring(
                                3,
                                5
                              );
                              var date = new Date(Date.UTC(year, month, day));
                              var customerID = socialAuthUser.user.uid;
                              firebase_integration.database
                                .collection("CustomerDatabase")
                                .doc(customerID.toString())
                                .set({
                                  ContactNo: "",
                                  CustomerID: socialAuthUser.user.uid,
                                  DOB: date,
                                  Email:
                                    socialAuthUser.additionalUserInfo.profile
                                      .email,
                                  Gender:
                                    socialAuthUser.additionalUserInfo.profile
                                      .gender,
                                  Name:
                                    socialAuthUser.additionalUserInfo.profile
                                      .name,
                                  isFacebookUser: true,
                                  WheelUsed: true,
                                  DateWheelUsed: new Date(),
                                  Discount: 0,
                                });
                              props.history.replace("/");
                              /* reading menu from database on customer login and setting its context*/
                              var menudata = [];

                              firebase_integration.database
                                .collection("Menu")
                                .get()
                                .then((docs) => {
                                  docs.forEach((doc) => {
                                    menudata.push(doc.data());
                                  });
                                  setMenu(menudata);
                                });
                            })
                            .catch((error) => {
                              alert.show(error);
                              setError({ error });
                            })
                        }
                      />
                      <div className="hint-text medium">
                        Don't have an account?{" "}
                        <a
                          type="button"
                          onClick={handleClick}
                          href="#"
                          className="text-col"
                        >
                          Sign Up!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* component two for card flip */}
              <LoginFront />
            </div>
          </ReactCardFlip>
        </div>
        <div className="col-lg- rightcard">
          <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <div>
                {/* component three for card flip */}
                <SignupFront />
              </div>
              <div>
                {/* component four for card flip */}
                <SignupBack />
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    </div>
  );

  /* redirect user to landing page after login */
  async function login() {
    try {
      await firebase_integration.login(email, password);
      if (firebase_integration.getCurrentUsername()) {
        props.history.replace("./");
      }
    } catch (error) {
      alert.show("Invalid Email/Password");
    }
  }
}

/* connect menu items to props for update */
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

/* dispatcher function to set menu in reducer */
const mapDispatchToProps = (dispatch) => {
  return {
    FetchItems: (items) => {
      dispatch(FetchItems(items));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(withAlert()(LoginBack))
);
