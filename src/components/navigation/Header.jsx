import React from "react";
import GuestLinks from './guestlinks';
import LoginLinks from './loginlinks';
import firebase_integration from '../fire';
import { withRouter } from 'react-router-dom';
import './header.css';
import { connect } from 'react-redux';

function Header(props) {

  /* Conditionally rendering the Navbar and its links
  according to the user session - whether the user is
  logged in or viewing the website as a guest. */
  return (
    <div>
      {firebase_integration.getCurrentUsername() ? <LoginLinks /> : <GuestLinks />}
    </div>
  );
}

export default withRouter(Header);
