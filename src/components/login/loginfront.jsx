import React from "react";
import FrontCard from "./frontcard";
import './loginstyles.css';

/* front card component for login */
function LoginFront() {
    return(
      <div>
          <FrontCard
            cardclass = "logcardfront1"
            text1="LOGIN"
            text2="TO"
            text3="KHANA SHANA"
            imgpath="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fchefs.svg?alt=media&token=07d03c0e-a812-48dc-8ea0-bfcb34260e5f"
          />
        </div>
      )
}

export default LoginFront;
