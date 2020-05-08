import React from "react";
import { useAlert } from "react-alert";
import { withAlert } from "react-alert";
import firebase_integration from "../fire";
import "./loginstyles.css";

/* step two for the multi-step form */
const StepTwo = (props) => {
  const alert = useAlert();
  let i = 0;

  /* field validation for required inputs in form */
  const checkInputField = (values) => {
    if (values.number === "" || values.gender === "" || values.dob === "") {
      alert.show("Please fill in all the fields.");
      return false;
    } else {
      return true;
    }
  };

  /* store user details in database when user clicks on sign up and then continue form to last step */
  const continuefwd = (e) => {
    if (checkInputField(props.values) && i === 0) {
      var year = values.dob.substring(0, 4);
      var month = parseInt(values.dob.substring(5, 7) - 1).toString();
      var day = values.dob.substring(8, 10);
      var date = new Date(Date.UTC(year, month, day));
      try {
        var customerID = firebase_integration.auth.currentUser.uid;
        firebase_integration.database
          .collection("CustomerDatabase")
          .doc(customerID.toString())
          .set({
            ContactNo: values.number,
            CustomerID: firebase_integration.auth.currentUser.uid,
            DOB: date,
            Email: values.email,
            Gender: values.gender,
            Name: values.name,
            isFacebookUser: false,
            WheelUsed: false,
            DateWheelUsed: new Date(),
            Discount: 0,
          })
          .catch(function (error) {
            alert.show("An error occured. Please try again");
          });
      } catch (error) {
        alert("An error occured. Please try again");
      }
      i = i + 1;
      props.nextStep();
    }
  };

  /* go back to previous step */
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  /* destruct prop values */
  const { values, handleChange } = props;

  return (
    <div className="logcardback2">
      <div className="box">
        <div className="sign1-text">HALF WAY THROUGH!</div>

        <div className="form-div">
          <div className="modal-dialog modal-login">
            <div className="modal-content">
              <div className="prog">
                <img src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fstep2.svg?alt=media&token=9de2bdde-bf3f-4fa1-b31d-cd845e2ae050" />
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
                  </div>
                </form>
              </div>
              <span className="back" onClick={back}>
                <img src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fback.svg?alt=media&token=892f9aa1-0870-4e45-8702-274068648e22" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /* register user with firebase and then continue to next step */
  async function onRegister() {
    try {
      await firebase_integration.register(
        values.name,
        values.email,
        values.password
      );
      continuefwd();
    } catch (error) {
      alert.show(
        "An error occured while signing up. Please Try Again!"
      );
    }
  }
};

export default withAlert()(StepTwo);
