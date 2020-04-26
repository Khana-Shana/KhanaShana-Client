import React,{useEffect} from "react";
import ReactBootstrap, {Nav, Button, Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import { getNumbers } from '../actions/getAction';
import {Link} from 'react-router-dom';
import './orderstyles.css';

function Header(props) {
    console.log(props);
    useEffect(() => {
        getNumbers();
    }, []);
    
    return (
        <div> 
        <Navbar className="nav-link01" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

             <Nav className="ml-auto">  {/* for the right side of navbar*/}
              <li class="nav-item-active01">
              <Link to = "/feedback">
              <button type = "button" id = "hc-butts" class="btn btn-primary btn-lg">
              <ion-icon name="home-outline01"></ion-icon>
                HOME
              </button>
              </Link>
            </li>
            <li class="nav-item-active01">
              <Link to = "/cart">
              <button type = "button" id = "hc-butts" class="btn btn-primary btn-lg">
              <ion-icon name="cart-outline01"></ion-icon>
                  CART
              <span> {props.basketProps.basketNumbers} </span>
              </button>
              </Link>
            </li>    
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps,{getNumbers})(Header);
