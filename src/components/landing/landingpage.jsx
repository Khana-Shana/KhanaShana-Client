import React from "react";
import Header from "../navigation/Header";
import Welcome from "./Welcome";
import Deals from "./Deals";
import Services from "./Services";
import Menu from "./Menu";
import Aboutus from "./Aboutus";
import Carousel from "./Reviews";
import "bootstrap/dist/css/bootstrap.min.css";

function LandingPage() {
  return (
    /* Calling all components on the landing page section wise. */
    <div>
      <Header />
      <div id="">
        <Welcome />
      </div>
      <div id="to-deals">
        <Deals />
      </div>
      <div id="to-services">
        <Services />
      </div>
      <div id="to-menu">
        <Menu />
      </div>
      <div id="to-about">
        <Aboutus />
      </div>
      <div id="to-reviews">
        <Carousel />
      </div>
    </div>
  );
}

export default LandingPage;
