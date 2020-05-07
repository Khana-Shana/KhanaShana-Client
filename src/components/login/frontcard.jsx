import React from "react";

/* front card component for login-signup cards*/

function FrontCard(props) {
  return (
    <div className={props.cardclass}>
      <div className="signup-text">
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
      </div>
      <div className="card2-img">
        <img className = "img-fluid" id = "card-img" src={props.imgpath} alt="" />
      </div>
    </div>
  );
}

export default FrontCard;
