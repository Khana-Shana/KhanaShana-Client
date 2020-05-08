import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase_integration from "../fire";
import "./passwordstyles.css";

function ForgotPassword(props) {
  /* set state for form input field */
  const [email, setEmail] = useState("");
  /* validate form entries */
  const checkInputField = (value) => {
    if (value === "") {
      alert("Please fill in your email.");
      return false;
    }
    return true;
  };

  return (
    <div class="pass-back">
      <Link to="/loginpage">
        <span>
          <img
            className="main-back"
            src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fback.svg?alt=media&token=892f9aa1-0870-4e45-8702-274068648e22"
          />
        </span>
      </Link>
      <div class="top">
        <div class="passcard">
          <div className="pass-text">
            FORGOT
            <br /> PASSWORD?
          </div>

          <div>
            <img
              id="pass-img"
              src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2FAsset%201.svg?alt=media&token=ad8aa644-4685-4ae5-ab98-74534c37d8aa"
              alt="image"
            />
            <div className="form-div">
              <div
                className="modal-dialog modal-login"
                style={{ marginLeft: "0px" }}
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">
                      <b>ENTER YOUR EMAIL</b>
                    </h4>
                  </div>
                  <div style={{ paddingTop: "0" }} className="modal-body1">
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
                    </form>
                    <div className="reset">
                      <input
                        type="submit"
                        className="btn btn-primary btn-lg"
                        value="RESET"
                        style={{
                          color: "#fff",
                          width: "100%",
                          marginLeft: "0%",
                        }}
                        onClick={() => {
                          if (checkInputField(email)) {
                            reset(email);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

/* send email to user on password reset*/
  async function reset() {
    try {
      await firebase_integration.passwordreset(email);
      props.history.replace("/loginpage");
    } catch (error) {
      alert("An error occured. Please try again");
    }
  }
}

export default withRouter(ForgotPassword);
