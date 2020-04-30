import React,{useEffect} from "react";
import ReactBootstrap, {Nav, Button, Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './orderstyles.css';

function Header(props) {

    
    return (
        <div> 
        <Navbar className="nav-link" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

             <Nav className="ml-auto">  {/* for the right side of navbar*/}
              <Link to = "/">
              <button type = "button" id = "hc-butts" class="btn btn-primary btn-lg">
              <ion-icon name="home-outline"></ion-icon>
              <div className = "hullo">HOME</div>
              </button>
              </Link>
              <Link to = "/cart">
              <button type = "button" id = "hc-butts" class="btn btn-primary btn-lg">
              <ion-icon name="cart-outline"></ion-icon>
              <div className = "cullo">CART</div>
              </button>
              </Link>    
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default Header;