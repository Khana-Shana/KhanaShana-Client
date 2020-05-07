import React from "react";
import FrontCard from "./frontcard";
import './loginstyles.css';

function SignupFront() {
  /* Creating the card of the front screen of sign up - image is fetched from the database. */
  return (
    <div>
      <FrontCard
        cardclass="logcardfront2"
        text1="SIGN UP"
        text2="WITH"
        text3="KHANA SHANA"
        imgpath="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2FGroup%2010580.svg?alt=media&token=068250f1-5466-4799-8037-3654d8c798e6"
      />
    </div>
  );
}

export default SignupFront;
