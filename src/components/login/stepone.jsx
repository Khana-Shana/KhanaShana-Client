import React, {useState } from "react";
import { useAlert } from 'react-alert'

const StepOne = (props) => {
  const alert = useAlert();
  const [show, setShow] = useState(true);

  const checkInputField = (values) => {
    /* Applying validation checks to see if the inputted values are empty.
    If they are, alerts are generated and the user is not allowed to 
    navigate to the next screen. */
    if (
      values.name === "" ||
      values.email === "" ||
      values.password === "" ||
      values.confirmpswd === ""
    ) {
      alert.show("Please fill in all the fields.");
      return false;
    } else { 
      /* Checking if the password and the confirm password inputs are exactly same. */
      if (values.password === values.confirmpswd) {
        return true;
      }
      alert.show("Passwords don't match.");
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  function continuefwd(e) {
    e.preventDefault();
    /* If the inputted values pass the validation checks, navigate to the next screen. */
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
                  <span onClick = {refreshPage} className="label on">LOGIN</span>
                  <span className="label off">
                    SIGN UP </span>
                </span>
              </label>
            </div>
      <div className="login-text">GET ON BOARD!</div>

      <div className="form-div">
        <div className="modal-dialog modal-login">
          <div className="modal-content">
            <div className="prog">
              <img src ="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fstep1.svg?alt=media&token=f4cdc414-0fc7-4416-a71f-dc6ea97fef9e"/>
            </div>
            <div className="modal-body">
              <form
                action="/examples/actions/confirmation.php"
                method="post"
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

