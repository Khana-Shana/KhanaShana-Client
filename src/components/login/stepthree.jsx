import React, { Component } from "react";
import firebase_integration from "../fire";

import { Line, Circle } from "rc-progress";

const StepThree = (props) => {
  return (
    <div className="logcardback2">
      <div className="sign-text">WELCOME!</div>
      <div className="prog">
        <Line
          percent="100"
          strokeWidth="2"
          strokeColor="#B74852"
          trailWidth="1"
          trailColor="white"
        />
      </div>
      <div>
        <img className="verify" src="/images/verify.svg" alt="" />
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
