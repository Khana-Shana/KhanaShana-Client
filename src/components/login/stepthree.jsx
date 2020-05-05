import React, { Component } from "react";
import firebase_integration from "../fire";
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

const StepThree = (props) => {
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
        <img id = "verifyimage1" src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fverify.svg?alt=media&token=d2371046-5d53-4c03-b4f6-bd84052d6b88" className="verify" alt="" />
      </div>
      <div>
        <button onClick = {logout} className="button" role="button">
          Lets Go!
        </button>
      </div>
    </div>
  );

  async function logout() {
    await firebase_integration.logout();
    // alert("logged out");
    window.location.reload(false);
}
};

export default withRouter(StepThree);
