import React from "react";
import Footer from '../navigation/footer.jsx';
import './aboutus.css';

function Aboutus() {
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
          id="owner"
          className="img-fluid"
          src="./images/Image 2-image.png"
          alt="Woman Cooking"
        /> 
        </div>
        <div className="sign-img">
        <img
          id="owner"
          className="img-fluid"
          src="./images/sign.jpg"
          alt="Woman Cooking"
        /> 
        </div>
      </div>
      <div className="about-img">
        <img
          id="womancook"
          className="img-fluid"
          src="./images/auntytest.svg"
          alt="Woman Cooking"
        />
      </div>
    </div>
    <Footer/>
    </div>

  );
}

export default Aboutus;
