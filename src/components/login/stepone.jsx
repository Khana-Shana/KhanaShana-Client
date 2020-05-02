import Button from "./loginbutton";
import React, { Component } from "react";
import { Line, Circle } from "rc-progress";

const checkInputField = (values) => {
  if (
    values.name === "" ||
    values.email === "" ||
    values.password === "" ||
    values.confirmpswd === ""
  ) {
    alert("Please fill in all the fields.");
    return false;
  } else {
    if (values.password === values.confirmpswd) {
      return true;
    }
    alert("Passwords don't match.");
  }
};

const StepOne = (props) => {

  function refreshPage() {
    window.location.reload(false);
  }

  function continuefwd(e) {
    e.preventDefault();
    if (checkInputField(props.values)) {
      props.nextStep();
    }                                
  }

  const { values, handleChange, click } = props;
  return (
    <div className="logcardback2">
                  <div className="button-position">
              <label className="login-button">
                <input type="checkbox" />
                <span className="back">
                  <div className ="butt-1"></div>
                  <span className="toggle"></span>
                  <span  onClick = {refreshPage} className="label on">LOGIN</span>
                  <span className="label off">
                    SIGN UP
                  </span>
                </span>
              </label>
            </div>
      <div className="login-text">GET ON BOARD!</div>

      <div className="form-div">
        <div className="modal-dialog modal-login">
          <div className="modal-content">
            <div className="prog">
              {/* <Line
                percent="40"
                strokeWidth="2"
                strokeColor="#B74852"
                trailWidth="1"
                trailColor="white"
              /> */}
              <img src ="./images/step1.svg"/>
            </div>
            <div className="modal-body">
              <form
                action="/examples/actions/confirmation.php"
                method="post"
                // onSubmit={e => e.preventDefault() && false }
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required="required"
                    onChange={handleChange("name")}
                    value={values.name}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required="required"
                    onChange={handleChange("email")}
                    value={values.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required="required"
                    onChange={handleChange("password")}
                    value={values.password}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    required="required"
                    onChange={handleChange("confirmpswd")}
                    value={values.confirmpswd}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    value="PROCEED"
                    onClick={continuefwd}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;

