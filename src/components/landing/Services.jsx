import React from "react";
import "./services.css";
import Prebook from './prebook.pdf';
import firebase_integration from '../fire.js'

function Services() {
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
                    src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Ffryaunty.svg?alt=media&token=687dc051-9f51-44d5-a5c0-ca82562fe45b"
                  />
                </div>
              {/* </section> */}
            </div>
            <div className="takeaway2">
              {/* <section className="container"> */}
                <div className="one">
                  <div className="servicestitleright2">DELIVERY</div>
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
                    src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Frider.svg?alt=media&token=5acd73bd-5b65-4be0-b2c7-c10ccffae47b"
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
                src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Ffamily.svg?alt=media&token=0b1c4194-86d8-4f74-bc0c-67211f60334d"
              />
              <div className="orderbtn">
                {/* <a
                  href="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/prebook.pdf?alt=media&token=e3e923ef-310f-41ca-aed3-ec2c62ff07a8"
                  type="button"
                  id="GFG"
                  className="button-error pure-button"
                >
                  Prebooking
                </a> */}
                            {/* <Link to = "/fullmenu"> */}
              <button
                id="GFG"
                type="button"
                className="button-error pure-button"
                style = {{fontSize: "1.7rem", width: "40%", border: "none", fontFamily: "'Jost', sans-serif", marginTop:"0%", marginLeft:"1%"}}
              >
                PLACE ORDER
              </button>
              {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
