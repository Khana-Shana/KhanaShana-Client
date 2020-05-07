import React from "react";
import { withRouter } from 'react-router-dom';
import firebase_integration from "../fire";


const StepThree = (props) => {
  /* Creating card of the Step Three screen for the sign-up process. */
  return (
    <div className="logcardback2">
      <div className="sign-text">WELCOME!</div>
      <div className="prog1">
        <img src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fstep3.svg?alt=media&token=1c60ba44-3484-4aad-952f-c3b8c4311d79" />
      </div>
      <div>
        <img id="verifyimage1" src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fverify.svg?alt=media&token=d2371046-5d53-4c03-b4f6-bd84052d6b88" className="verify" alt="" />
      </div>
      <div>
        <button onClick={logout} className="button" role="button">
          Lets Go!
        </button>
      </div>
    </div>
  );

  /* firebase logs in user by default after sign up, this functions logs out the user immediately after sign up for email verification purposes */
  async function logout() {
    await firebase_integration.logout();
    window.location.reload(false);
  }
};

export default withRouter(StepThree);
