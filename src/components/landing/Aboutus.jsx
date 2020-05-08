import React from "react";
import firebase_integration from "../fire.js";
import "./aboutus.css";

function Aboutus() {
  /* setting state for restaurant details to fetch from database */
  const [restaurantDetails, setdetails] = React.useState({});

  React.useEffect(() => {
    /* Fetching the text to be displayed on the About Us
    screen from the Restaurant Details screen on the 
    Admin side. */
    try {
      firebase_integration.database
        .collection("RestaurantDetails")
        .doc("jOzlK1WWsNPdRrjcYLGv")
        .onSnapshot((snapshot) => {
          setdetails(snapshot.data());
        });
    } catch (error) {
      alert("An error occured. Please try again");
    }
  }, restaurantDetails);

  return (
    <div>
      <div className="aboutus row">
        <div className="col-sm-7 about-text">
          <div className="aboutustitle">ABOUT US</div>
          <blockquote className="otro-blockquote">
            <p>
              Bon Appetempt is a home-based food venture that strives to offer
              its customers a vast variety of sumptuous food items desserts from
              its rich cuisine.
            </p>
          </blockquote>
          <div className="textabout">
            <p>{restaurantDetails.AboutUs}</p>
          </div>
          <div className="uzma-img">
            <img
              id="owner1"
              className="img-fluid img-absolute"
              alt="Woman Cooking"
              src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2FImage%202-image.png?alt=media&token=da361037-4b6a-438f-ad36-08912beb668b"
            />
          </div>
          <div className="sign-img">
            <img
              id="owner2"
              className="img-fluid img-absolute"
              alt="Woman Cooking"
              src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fsign.jpg?alt=media&token=f1c04b2e-47b2-4e58-a645-c02517d1e86e"
            />
          </div>
        </div>
        <div className="col about-img">
          <img
            id="womancook1"
            className="img-fluid img-absolute"
            alt="Woman Cooking"
            src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fauntytest.svg?alt=media&token=f323dfc0-3ae4-4ff4-8766-320a477dbb3f"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
