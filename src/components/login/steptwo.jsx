import React, { Component } from "react";
import { Line, Circle } from "rc-progress";
import firebase_integration from "../fire";
import './loginstyles.css';

const checkInputField = (values) => {
  // return true;
  if (values.number === "" || values.gender === "" || values.dob === "") {
    alert("Please fill in all the fields.");
    return false;
  } else {
    // if(values.password === values.confirmpswd)
    // {
    return true;
    // }
    // alert("Passwords don't match.");
  }
};

const StepTwo = (props) => {
  const continuefwd = (e) => {
    // e.preventDefault();
    if (checkInputField(props.values)) {
      var year = values.dob.substring(0, 4) 
      var month = parseInt(values.dob.substring(5, 7)-1).toString()
      var day = values.dob.substring(8, 10)
      var date = new Date(Date.UTC(year, month, day))
      var customerID = firebase_integration.auth.currentUser.uid
      
        firebase_integration.database.collection("CustomerDatabase").doc(customerID.toString()).set({
          ContactNo: values.number,
          CustomerID: firebase_integration.auth.currentUser.uid,
          DOB: date,
          Email: values.email,
          Gender: values.gender,
          Name: values.name,
          isFacebookUser: false
      }).catch(function(error) {
        alert(error.message)
    });
      props.nextStep();
    }
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;

  return (
    <div className="logcardback2">
 
      <div className="box">
        <div className="sign1-text">HALF WAY THROUGH!</div>

        <div className="form-div">
          <div className="modal-dialog modal-login">
            <div className="modal-content">
              <div className="prog">
                {/* <Line
                  percent="70"
                  strokeWidth="2"
                  strokeColor="#B74852"
                  trailWidth="1"
                  trailColor="white"
                /> */}
                <img src ="./images/step2.svg"/>
              </div>
              <div className="modal-body">
                <form
                  action="/examples/actions/confirmation.php"
                  method="post"
                  onSubmit={(e) => e.preventDefault() && false}
                >
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      required="required"
                      onChange={handleChange("number")}
                      value={values.number}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Gender"
                      required="required"
                      onChange={handleChange("gender")}
                      value={values.gender}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Date Of Birth (DD/MM/YY)"
                      required="required"
                      onChange={handleChange("dob")}
                      value={values.dob}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary btn-block btn-lg"
                      value="SIGN UP"
                      onClick={onRegister}
                    />
                    {/* <input
                      type="submit"
                      className="btn btn-primary btn-block btn-lg"
                      value="BACK"
                      onClick={back}
                    /> */}
                  </div>
                </form>
              </div>
              <span className = "back" onClick = {back}>
              <img src = "./images/back.svg"/>
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  async function onRegister() {
    try {
      firebase_integration.register(values.name, values.email, values.password);
      // await firebase.addQuote(quote)
      // props.history.replace('./')
      continuefwd();
    } catch (error) {
      alert("An error occured while signing up. Please Try Again!");
      console.log(error.message)
    }
  }
};

export default StepTwo;
