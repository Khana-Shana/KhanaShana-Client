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
      <Link to = "/">
      <span>
              <img  className = "main-back" src = "https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Fback.svg?alt=media&token=892f9aa1-0870-4e45-8702-274068648e22"/>
            </span>
            </Link>
          <LoginBack/>
      </div>
  );
}

export default LoginScreen;
