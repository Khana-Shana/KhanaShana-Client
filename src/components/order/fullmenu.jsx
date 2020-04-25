import React from 'react';
import firebase from '../fire';
import {withRouter} from 'react-router-dom';
// import Menu from './menu';
// import '../cartstyles.css';
// import Header from './navbar';


function MenuScreen(props){

    if(!firebase.getCurrentUsername()) {
		// not logged in
		alert('Please login first')
		props.history.replace('/loginpage')
		return null
    }
    return(
        <div>
          hello
          {/* <Header/> */}
           {/* <Menu/> */}
        </div>
    );
}

export default withRouter(MenuScreen);