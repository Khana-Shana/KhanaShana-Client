import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import firebase_integration from "../fire";
import "./header.css";

/* component rendered for navbar when user is logged in */

function LoginLinks(props) {
  return (
    <div>
      <Navbar
        style={{ paddingBottom: "0.8%", paddingTop: "0.6%", boxShadow: "none" }}
        className="nav-link"
        expand="lg"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link to="/">
            <button
              style={{
                background: "#955F61",
                color: "white",
                marginTop: "4%",
                paddingTop: "0",
                fontSize: "1.2rem",
              }}
              className="navbar-brand"
            >
              Khana Shana
            </button>
          </Link>
          <Nav className="mr-auto">
            <HashLink smooth to="/#to-menu">
              <li className="nav-item active">
                <button
                  className="nav-link"
                  to="to-menu"
                  style={{
                    background: "#955F61",
                    color: "white",
                    paddingTop: "19%",
                  }}
                >
                  Menu
                </button>
              </li>
            </HashLink>
            <HashLink smooth to="/#to-services">
              <li className="nav-item">
                <button
                  className="nav-link"
                  to="to-services"
                  style={{
                    background: "#955F61",
                    color: "white",
                    paddingTop: "15%",
                  }}
                >
                  Services
                </button>
              </li>
            </HashLink>
            <HashLink smooth to="/#to-about">
              <li className="nav-item">
                <button
                  className="nav-link"
                  to="to-about"
                  style={{
                    background: "#955F61",
                    color: "white",
                    paddingTop: "13%",
                  }}
                >
                  About Us
                </button>
              </li>
            </HashLink>
          </Nav>

          <Nav className="ml-auto">
            <HashLink smooth to="/#to-deals">
              <li className="nav-item active">
                <button
                  className="nav-link"
                  to="to-deals"
                  style={{
                    background: "#955F61",
                    color: "white",
                    paddingTop: "19%",
                  }}
                >
                  Deals
                </button>
              </li>
            </HashLink>
            <Link to="/myprofile">
              <li className="nav-item active">
                <button
                  className="nav-link"
                  style={{
                    background: "#955F61",
                    color: "white",
                    paddingTop: "14%",
                  }}
                >
                  {/* get name of user from firebase */}
                  {firebase_integration.getDisplayName()}
                </button>
              </li>
            </Link>

            <li className="nav-item">
              <button
                className="nav-link"
                onClick={logout}
                style={{
                  background: "#955F61",
                  color: "white",
                  paddingTop: "17%",
                  marginRight: "10%",
                }}
              >
                Logout
              </button>
            </li>
            <Link to="/cart">
              <li className="nav-item">
                <button
                  type="button"
                  id="GFG"
                  className="fa fa-shopping-cart fa-xs"
                  style={{
                    background: "#955F61",
                    color: "white",
                    fontSize: "1.5rem",
                    paddingTop: "19%",
                  }}
                ></button>
              </li>
            </Link>
            <li className="nav-item">
              <button
                type="button"
                id="GFG"
                href="https://www.facebook.com/uzmascuisine/"
                className="fa fa-facebook fa-xs"
                style={{
                  background: "#955F61",
                  color: "white",
                  fontSize: "1.5rem",
                  paddingTop: "19%",
                }}
              ></button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                id="GFG"
                href="https://www.instagram.com/bonappetempt.pk/"
                className="fa fa-instagram fa-xs"
                style={{
                  background: "#955F61",
                  color: "white",
                  fontSize: "1.5rem",
                  paddingTop: "19%",
                }}
              ></button>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

  /* logs user out from firebase and redirects to landing page */
  async function logout() {
    await firebase_integration.logout();
    localStorage.setItem("menu", []);
    props.history.replace("/");
  }
}

export default withRouter(LoginLinks);
