import React from "react";
import "./header.css";
import ReactBootstrap, {Nav, Button, Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollchor from 'react-scrollchor';
import firebase_integration from '../fire';
import {withRouter} from 'react-router-dom';

function LoginLinks(props){
    return(
      <div>
      <Navbar className="nav-link" expand="lg">
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <a style={{background: "#955F61",color: "white", marginTop:"6px"}} className="navbar-brand" href="/">Khana Shana </a>
        <Nav className="mr-auto">  {/* for the left side of navbar*/}
  
              <li className="nav-item active">
              <Scrollchor  className="nav-link" to="to-menu" style={{background: "#955F61",color: "white",marginTop:"11%"}}>Menu</Scrollchor >
            </li>
            <li className="nav-item">
              <Scrollchor  className="nav-link" to="to-services" style={{background: "#955F61",color: "white",marginTop:"11%"}}>Services</Scrollchor >
            </li>
            <li className="nav-item">
              <Scrollchor  className="nav-link" to="to-about" style={{background: "#955F61",color: "white", marginTop:"11%"}}>About Us</Scrollchor >
            </li>
              </Nav>

             
             <Nav className="ml-auto">  
              <li className="nav-item active">
              <Scrollchor  className="nav-link" to="to-deals" style={{background: "#955F61",color: "white",marginTop:"11%"}}>Deals</Scrollchor >
            </li>
            <li className="nav-item active">
              <a  className="nav-link" href="/myprofile" style={{background: "#955F61",color: "white",marginTop:"11%"}}>{firebase_integration.getDisplayName()}</a >
            </li>
            <li className = "nav-item">
              <button className="btn" onClick={logout} style={{background: "#955F61",color: "white",marginTop: "11%"}}>Log Out</button>
            </li>
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
        alert("logged out");
		props.history.replace('/');
	}
}

export default withRouter(LoginLinks);