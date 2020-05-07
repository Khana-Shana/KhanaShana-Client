import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./header.css";

/* component rendered for navbar when user is not logged in */

function GuestLinks() {
  return (
    <div>
      <Navbar className="nav-link" expand="lg" style={{ paddingBottom: "0.8%", paddingTop: "0.6%", boxShadow: "none" }}>
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
              Khana Shana{" "}
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
                    marginTop: "5%",
                  }}
                >
                  Deals
                </button>
              </li>
            </HashLink>
            <Link to="/loginpage">
              <li className="nav-item active">
                <button
                  className="nav-link"
                  style={{
                    background: "#955F61",
                    color: "white",
                    paddingTop: "19%",
                  }}
                >
                  Login
                </button>
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
}

export default GuestLinks;
