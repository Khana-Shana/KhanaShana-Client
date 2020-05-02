import React, { useEffect } from "react";
import ReactBootstrap, {
  Nav,
  Button,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./orderstyles.css";

function Header(props) {
  return (
    <div>
      <Navbar className="nav-link" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to={props.link}>
              <li className="nav-item">
                <button
                  className="btn hullo"
                  style={{
                    background: "#626E60",
                    color: "white",
                    width: "100%",
                    height: "20%",
                    marginTop: "3%",
                  }}
                >
                  <i class="fa fa-arrow-left fa-lg" aria-hidden="true"></i>BACK
                </button>
              </li>
            </Link>
          </Nav>

          <Nav className="ml-auto">
            <Link to="/">
              <li className="nav-item">
                <button
                  className="btn hullo"
                  style={{
                    background: "#626E60",
                    color: "white",
                    width: "100%",
                    height: "20%",
                    marginTop: "3%",
                  }}
                >
                  <i class="fa fa-home fa-lg" aria-hidden="true"></i>HOME
                </button>
              </li>
            </Link>
            <Link to="/cart">
              <li
                className="nav-item"
                style={{
                  marginLeft: "3%",
                }}
              >
                <button
                  className="btn cullo"
                  style={{
                    background: "#626E60",
                    color: "white",
                    marginTop: "3%",
                    width: "100%",
                    height: "20%",
                  }}
                >
                  <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                  CART
                </button>
              </li>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
