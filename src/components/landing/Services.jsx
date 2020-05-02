import React from "react";
import "./services.css";
import Prebook from './prebook.pdf';
import firebase_integration from '../fire.js'

function Services() {
  firebase_integration.getImageURL('fryaunty', 'Mehreen', '', 'fryaunty.svg')
  firebase_integration.getImageURL('rider', 'Mehreen', '', 'rider.svg')
  firebase_integration.getImageURL('family', 'Mehreen', '', 'family.svg')

  return (
    <div className="container-fluid services">
      <div className="row">
        <div className="col">
          <div className="rectangle"></div>
          <div className="lefttext">
            <div className="textdetailsleft">
              OUR
              <br /> SERVICES
            </div>
          </div>
        </div>
        <div className="col">
          <div className="righttext">
            <div className="textdetailsright">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sollicitudin quam dignissim erat mattis fringilla. Sos Vivamus
              tincidunt non sapien non sapien non ela sagittis.
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="left-services">
            <div className="takeaway">
              {/* <section className="container"> */}
                <div className="one">
                  <div className="servicestitleright">TAKEAWAY</div>
                  <div className="servicedetails">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sollicitudin quam dign issimerat mattis fringilla. Sed
                    sollicitudin quam dign issimerat mattis fringilla.
                  </div>
                </div>
                <div className="two">
                  <img
                    id="fryaunty"
                    className="img-fluid"
                    alt="fryaunty"
                  />
                </div>
              {/* </section> */}
            </div>
            <div className="delivery">
              {/* <section className="container"> */}
                <div className="one">
                  <div className="servicestitleright">DELIVERY</div>
                  <div className="servicedetails">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sollicitudin quam dign issimerat mattis fringilla. Sed
                    sollicitudin quam dign issimerat mattis fringilla.
                  </div>
                </div>
                <div className="two">
                  <img
                    id="rider"
                    className="img-fluid"
                    alt="rider"
                  />
                </div>
              {/* </section> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="right-services">
            <div className="prebook">
              <div className="servicestitleleft">CATERING</div>
              <img
                id="family"
                className="img-fluid"
                alt="Family"
              />
              <div className="orderbtn">
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/prebook.pdf?alt=media&token=e3e923ef-310f-41ca-aed3-ec2c62ff07a8"
                  type="button"
                  id="GFG"
                  className="button-error pure-button"
                >
                  Prebooking
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
