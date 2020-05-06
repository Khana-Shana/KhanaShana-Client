import React from "react";
import {withRouter} from 'react-router-dom';
import GuestLinks from './guestlinks';
import LoginLinks from './loginlinks';
import firebase_integration from '../fire';
import './header.css';

/* header component that renders navbar for the website based on user logged-in state */

function Header(props) {
    return (
        <div>
          {firebase_integration.getCurrentUsername() ?  <LoginLinks/> : <GuestLinks/> }
      </div>
    );
}

export default withRouter(Header);
