import React from "react";
import ReactBootstrap, {Nav, Button, Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollchor from 'react-scrollchor';
import "./header.css";
import {Link} from 'react-router-dom';

function GuestLinks() {
    return(
      <div>
      <Navbar className="nav-link" expand="lg">
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link to = "/">
          <a style={{background: "#955F61",color: "white",marginTop:"6px"}} className="navbar-brand">Khana Shana </a>
          </Link>
        <Nav className="mr-auto">  {/* for the left side of navbar*/}
  
              <li className="nav-item active">
              <Scrollchor  className="nav-link" to="to-menu" style={{background: "#955F61",color: "white",marginTop:"7px"}}>Menu</Scrollchor >
            </li>
            <li className="nav-item">
              <Scrollchor  className="nav-link" to="to-services" style={{background: "#955F61",color: "white",marginTop:"7px"}}>Services</Scrollchor >
            </li>
            <li className="nav-item">
              <Scrollchor  className="nav-link" to="to-about" style={{background: "#955F61",color: "white",marginTop:"7px"}}>About Us</Scrollchor >
            </li>
              </Nav>
             <Nav className="ml-auto">  {/* for the right side of navbar*/}
              <li className="nav-item active">
              <Scrollchor  className="nav-link" to="to-deals" style={{background: "#955F61",color: "white",marginTop:"8px"}}>Deals</Scrollchor >
            </li>
            <Link to = "/loginpage">
            <li className="nav-item active">
              <a  className="nav-link" style={{background: "#955F61",color: "white",marginTop:"7px"}}>Login</a >
            </li>
            </Link>
            <li className="nav-item">
            {/* <i class="fa fa-facebook"></i> */}
              <a type = "button" id = "GFG" href="https://www.facebook.com/uzmascuisine/" className="fa fa-facebook fa-xs" style={{background: "#955F61",color: "white"}}></a >
            </li>
            <li className="nav-item">
              <a type = "button" id = "GFG"  href="https://www.instagram.com/bonappetempt.pk/" className="fa fa-instagram fa-xs" style={{background: "#955F61",color: "white"}}></a >
            </li>
    
            </Nav>
            </Navbar.Collapse>
              </Navbar>
            </div>
            
    );
}

export default GuestLinks;