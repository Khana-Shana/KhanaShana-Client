import React from "react";
import "./header.css";
import ReactBootstrap, {Nav, Button, Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollchor from 'react-scrollchor';
import firebase_integration from '../fire';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { HashLink} from 'react-router-hash-link';

function LoginLinks(props){
    return(
      <div>
      <Navbar className="nav-link" expand="lg">
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Link to = "/">
          <a style={{background: "#955F61",color: "white",marginTop:"6px"}} className="navbar-brand">Khana Shana </a>
          </Link>
        <Nav className="mr-auto">  {/* for the left side of navbar*/}
  
        <HashLink smooth to="/#to-menu">
              <li className="nav-item active">
              <a  className="nav-link" to="to-menu" style={{background: "#955F61",color: "white",paddingTop:"35%"}}>Menu</a >
            </li>
            </HashLink>
            <HashLink smooth to="/#to-services">
            <li className="nav-item">
              <a  className="nav-link" to="to-services" style={{background: "#955F61",color: "white",paddingTop:"27%"}}>Services</a >
            </li>
            </HashLink>
            <HashLink smooth to="/#to-about">
            <li className="nav-item">
              <a  className="nav-link" to="to-about" style={{background: "#955F61",color: "white", paddingTop:"25%"}}>About Us</a >
            </li>
            </HashLink>
              </Nav>

             
             <Nav className="ml-auto"> 
             <HashLink smooth to="/#to-deals">
              <li className="nav-item active">
              <a  className="nav-link" to="to-deals" style={{background: "#955F61",color: "white",paddingTop:"26%"}}>Deals</a >
            </li>
            </HashLink>
            <Link to = "/myprofile">
            <li className="nav-item active">
              <a  className="nav-link" style={{background: "#955F61",color: "white",paddingTop:"18%"}}>{firebase_integration.getDisplayName()}</a >
            </li>
            </Link>

            <li className = "nav-item">
              <a className="nav-link" onClick={logout} style={{background: "#955F61",color: "white",paddingTop:"21%", marginRight:"10%"}}>Logout</a>
            </li>
            <Link to = "/cart">
            <li className="nav-item">
            {/* <i class="fa fa-facebook"></i> */}
              <a type = "button" id = "GFG" className="fa fa-shopping-cart fa-xs" style={{background: "#955F61",color: "white"}}></a >
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
            
            // </div>
            
    );

    

    async function logout() {
        await firebase_integration.logout();
        // alert("logged out");
		props.history.replace('/');
	}
}

export default withRouter(LoginLinks);