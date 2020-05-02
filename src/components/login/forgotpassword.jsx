import React, { useState } from "react";
import "./passwordstyles.css";
import firebase_integration from "../fire";
import { Alert, AlertTitle } from "@material-ui/lab";
export default function ForgotPassword(props) {
  const [email, setEmail] = useState("");
  const checkInputField = (value) => {
    if (value === "") {
      alert("Please fill in your email.");
      return false;
    }
    return true;
  };

  return (
    <div class="pass-back">
      <div class="passcard">
        <div className="pass-text">
          FORGOT
          <br /> PASSWORD?
        </div>

        <div>
          <img id="pass-img" src=".\images\Asset 1.svg" alt="image" />
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
                  </form>
                  <div
                    className="reset"
                  >
                    <input
                      type="submit"
                      className="btn btn-primary btn-lg"
                      value="RESET"
                      style={{ color: "#fff", width: "100%", marginLeft: "0%" }}
                      onClick={() => {
                        if(checkInputField(email)){
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
  );

  async function reset() {
    try {
      await firebase_integration.passwordreset(email);
      alert("Email Sent");
      props.history.replace("/loginpage");
    } catch (error) {
      alert(error.message);
    }
  }
}
