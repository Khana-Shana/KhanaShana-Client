import React, { Component } from "react";
import firebase_integration from "../fire";
import { Line, Circle } from "rc-progress";

const StepThree = (props) => {
  firebase_integration.getImageURL('verifyimage1', 'Mehreen', '', 'verify.svg')
  return (
    <div className="logcardback2">
      <div className="sign-text">WELCOME!</div>
      <div className="prog1">
        {/* <Line
          percent="100"
          strokeWidth="2"
          strokeColor="#B74852"
          trailWidth="1"
          trailColor="white"
        /> */}
        <img src ="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fstep3.svg?alt=media&token=1c60ba44-3484-4aad-952f-c3b8c4311d79"/>
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
