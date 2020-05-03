import React from "react";
import './aboutus.css';
import firebase_integration from '../fire.js'

function Aboutus() {
  firebase_integration.getImageURL('owner1', 'Mehreen', '', 'Image 2-image.png')
  firebase_integration.getImageURL('owner2', 'Mehreen', '', 'sign.jpg')
  firebase_integration.getImageURL('womancook1', 'Mehreen', '', 'auntytest.svg')
  return (
    <div>
    <div className="aboutus grid-cont">
      <div className="about-text">
        <div className="aboutustitle">ABOUT US</div>
        <blockquote className="otro-blockquote">
          <p>
            Morales ha convertido la ya dúctil democracia boliviana en una
            plastilina con la que sus manos juegan a su antojo.
          </p>
        </blockquote>
        <div className="textabout">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
          sollicitudin quam dign issimerat mattis fringilla. Sed sollicitudin 
          quam dign issimerat mattis fringilla. Lorem ipsum dolor sit 
          amet, consectetur adipiscing elit. Sed sollicitudin quam dign 
          issimerat mattis fringilla. Sed sollicitudin quam dign issimerat
          mattis fringilla sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="uzma-img">
        <img
          id="owner1"
          className="img-fluid"
          alt="Woman Cooking"
        /> 
        </div>
        <div className="sign-img">
        <img
          id="owner2"
          className="img-fluid"
          alt="Woman Cooking"
        /> 
        </div>
      </div>
      <div className="about-img">
        <img
          id="womancook1"
          className="img-fluid"
          alt="Woman Cooking"
        />
      </div>
    </div>
    </div>

  );
}

export default Aboutus;
