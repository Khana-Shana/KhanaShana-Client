import React from 'react'
import Header from './navbar';
import Menu from './menu';

function MenuScreen(){
    return(
        <div>
        <Header title = "MENU" link = "/"/>
        <Menu/>
        </div>
    );

}
export default MenuScreen;