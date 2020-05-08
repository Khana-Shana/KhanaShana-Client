import React from "react";
import "./services.css";

/* component that renders services offered by the restaurant */
function Services() {
  return (
    <div className="container-fluid services">
      <div className="row mb-0 pb-0" style={{ paddingBottom: "0px" }}>
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
              Our services include home delivery and takeaway of regular orders
              as well as prebooking of catering orders, the details of which can
              be found by clicking on the 'See Details' button below.
            </div>
          </div>
        </div>
      </div>
      <div className="row .no-gutters " style={{ marginTop: "0%" }}>
        <div className="col">
          <div className="left-services">
            <div className="takeaway">
              <div className="one">
                <div className="servicestitleright">TAKEAWAY</div>
                <div className="servicedetails">
                  Our customers can avail our takeaway services and pick up
                  their piping hot food and luscious desserts from our doorstep.
                  They will be notified about pick up details!
                </div>
              </div>
              <div className="two">
                <img
                  id="fryaunty"
                  className="img-fluid img-absolute"
                  alt="fryaunty"
                  src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Ffryaunty.svg?alt=media&token=687dc051-9f51-44d5-a5c0-ca82562fe45b"
                />
              </div>
            </div>
            <div className="takeaway2">
              <div className="one">
                <div className="servicestitleright2">DELIVERY</div>
                <div className="servicedetails">
                  We also offer door-to-door delivery in and around Garden Town
                  and its surrounding areas so that you don't have to hassle!
                  Home delivery service will incur a fixed charge of Rs 100.
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
                <a
                  id="GFG"
                  type="button"
                  href="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/prebook.pdf?alt=media&token=e3e923ef-310f-41ca-aed3-ec2c62ff07a8"
                  target="_blank"
                  className="button-error pure-button"
                  style={{
                    fontSize: "1.7rem",
                    width: "40%",
                    border: "none",
                    fontFamily: "'Jost', sans-serif",
                    marginTop: "0%",
                    marginLeft: "1%",
                  }}
                >
                  SEE DETAILS
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
