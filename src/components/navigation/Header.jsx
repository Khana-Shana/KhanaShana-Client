import React from "react";
import ReactBootstrap, {Nav, Button, Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GuestLinks from './guestlinks';
import LoginLinks from './loginlinks';
import firebase_integration from '../fire';
import {withRouter} from 'react-router-dom';
import './header.css';
import {connect} from 'react-redux';

function Header(props) {

    return (
        <div>
          {firebase_integration.getCurrentUsername() ?  <LoginLinks/> : <GuestLinks/> }
      </div>
    );
}

export default withRouter(Header);
