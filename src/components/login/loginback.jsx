import React from "react";
// import Button from "./loginbutton";
import LoginFront from "./loginfront";
import ReactCardFlip from "react-card-flip";
import SignupBack from "./signupback";
import SignupFront from "./signupfront";
import { useState, useEffect } from "react";
import firebase_integration from "../fire";
import { Link, withRouter } from "react-router-dom";
import Login from "./login";
import './loginstyles.css';
import { FacebookLoginButton } from "react-social-login-buttons";

function LoginBack(props) {
  const [isFlipped, setState] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  return (
    <div className="cont row">
      <div className="col-lg- leftcard">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className="logcardback1">
            <div className="button-position">
              <label className="login-button">
                <input type="checkbox" />
                <span className="back">
                  <div className ="butt"></div>
                  <span className="toggle"></span>
                  <span className="label on">LOGIN</span>
                  <span onClick = {handleClick} className="label off">
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
                          onClick={login}
                        />
                      </div>
                    </form>
                    <p className="hint-text medium">
                      <Link to = "/resetpassword">
                      <a>
                        Forgot Your Password?
                      </a>
                      </Link>
                    </p>
                    <FacebookLoginButton
                        onClick={() =>
                          firebase_integration.doSignInWithFacebook()
                            .then((socialAuthUser) => {
                              var year = socialAuthUser.additionalUserInfo.profile.birthday.substring(6, 10) 
                                var month = parseInt(socialAuthUser.additionalUserInfo.profile.birthday.substring(0, 2)-1).toString()
                                var day = socialAuthUser.additionalUserInfo.profile.birthday.substring(3, 5)
                                var date = new Date(Date.UTC(year, month, day))
                                var customerID = socialAuthUser.user.uid
                                firebase_integration.database.collection("CustomerDatabase").doc(customerID.toString()).set({
                                  ContactNo: "",
                                  CustomerID: socialAuthUser.user.uid,
                                  DOB: date,
                                  Email: socialAuthUser.additionalUserInfo.profile.email,
                                  Gender: socialAuthUser.additionalUserInfo.profile.gender,
                                  Name: socialAuthUser.additionalUserInfo.profile.name,
                                  isFacebookUser: true
                                })
                              setError({ error: null });
                              alert(error);
                              props.history.replace("/");
                            })
                            .catch((error) => {
                              alert(error);
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
            <LoginFront />
          </div>
        </ReactCardFlip>
      </div>
      <div className="col-lg- rightcard">
        <div>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div>
              <SignupFront />
            </div>
            <div>
              <SignupBack />
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  );

  async function login() {
    try {
      await firebase_integration.login(email, password);
      alert("logged in");
      props.history.replace("/");
    } catch (error) {
      alert("Invalid Email/Password");
      console.log("loginbackerror", error.message)
    }
  }
}

export default withRouter(LoginBack);
