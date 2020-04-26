import React from "react";
import Header from './Header';
import Welcome from './Welcome';
import Deals from './Deals';
import Services from './Services';
import Menu from './Menu';

// import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileLanding() {
    
        return (
    <div>
        <Header/>
        <Welcome/>
        <Deals/>
        <Services/>
        <Menu/>
        {/* <Aboutus/> */}
        {/* <Contact/> */}
        {/* <LoginScreen/> */}
    </div>
    );

}
export default ProfileLanding;