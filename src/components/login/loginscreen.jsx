import React from "react";
import LoginBack from './loginback';
import LoginFront from './loginfront';
import SignupFront from './signupfront';
import SignupBack from './signupback';
import './loginstyles.css';
import {Link} from 'react-router-dom';

// import Form from './form';

function LoginScreen() {
  return (
    <div className="container-fluid login-back">
          <LoginBack/>
      </div>
  );
}

export default LoginScreen;
