import React from 'react'
import Header from './navbar';
import Menu from './menu';
import firebase from '../fire';

function MenuScreen(props){
    if(!firebase.getCurrentUsername()) {
		// not logged in
		alert('Please login first')
		props.history.replace('/loginpage')
		return null
    }
    return(
        <div>
        <Header title = "MENU" link = "/"/>
        <Menu/>
        </div>
    );

}
export default MenuScreen;