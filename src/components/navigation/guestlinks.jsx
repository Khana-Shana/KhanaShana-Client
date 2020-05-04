import React from "react";
import ReactBootstrap, {
  Nav,
  Navbar
} from "react-bootstrap";
import "./header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function GuestLinks() {
  return (
    <div>
      <Navbar className="nav-link" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link to="/">
            <a
              style={{
                background: "#955F61",
                color: "white",
                marginTop: "6px",
              }}
              className="navbar-brand"
            >
              Khana Shana{" "}
            </a>
          </Link>
          <Nav className="mr-auto">
            <HashLink smooth to="/#to-menu">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  to="to-menu"
                  style={{
                    background: "#955F61",
                    color: "white",
                    marginTop: "7px",
                  }}
                >
                  Menu
                </a>
              </li>
            </HashLink>
            <HashLink smooth to="/#to-services">
              <li className="nav-item">
                <a
                  className="nav-link"
                  to="to-services"
                  style={{
                    background: "#955F61",
                    color: "white",
                    marginTop: "12%",
                  }}
                >
                  Services
                </a>
              </li>
            </HashLink>
            <HashLink smooth to="/#to-about">
              <li className="nav-item">
                <a
                  className="nav-link"
                  to="to-about"
                  style={{
                    background: "#955F61",
                    color: "white",
                    marginTop: "11%",
                  }}
                >
                  About Us
                </a>
              </li>
            </HashLink>
          </Nav>
          <Nav className="ml-auto">
            <HashLink smooth to="/#to-deals">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  to="to-deals"
                  style={{
                    background: "#955F61",
                    color: "white",
                    marginTop: "15%",
                  }}
                >
                  Deals
                </a>
              </li>
            </HashLink>
            <Link to="/loginpage">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  style={{
                    background: "#955F61",
                    color: "white",
                    marginTop: "7px",
                  }}
                >
                  Login
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <a
                type="button"
                id="GFG"
                href="https://www.facebook.com/uzmascuisine/"
                className="fa fa-facebook fa-xs"
                style={{ background: "#955F61", color: "white" }}
              ></a>
            </li>
            <li className="nav-item">
              <a
                type="button"
                id="GFG"
                href="https://www.instagram.com/bonappetempt.pk/"
                className="fa fa-instagram fa-xs"
                style={{ background: "#955F61", color: "white" }}
              ></a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default GuestLinks;
