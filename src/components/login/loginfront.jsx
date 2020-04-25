import React from "react";
import FrontCard from "./frontcard";
import './loginstyles.css';
function LoginFront() {
  return(
    <div>
      <FrontCard
        cardclass = "logcardfront1"
        text1="LOGIN"
        text2="TO"
        text3="KHANA SHANA"
        imgpath="./images/chefs.svg"
      />
    </div>
  );
}

export default LoginFront;
