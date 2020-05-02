import React, { Component } from "react";
import firebase_integration from "../fire";
import { Line, Circle } from "rc-progress";

const StepThree = (props) => {
  firebase_integration.getImageURL('verifyimage1', 'Mehreen', '', 'verify.svg')
  return (
    <div className="logcardback2">
      <div className="sign-text">WELCOME!</div>
      <div className="prog">
        {/* <Line
          percent="100"
          strokeWidth="2"
          strokeColor="#B74852"
          trailWidth="1"
          trailColor="white"
        /> */}
        <img src ="./images/step3.svg"/>
      </div>
      <div>
        <img id = "verifyimage1" className="verify" alt="" />
      </div>
      <div>
        <a href="#" className="button" role="button">
          Lets Go!
        </a>
      </div>
    </div>
  );
};

export default StepThree;
