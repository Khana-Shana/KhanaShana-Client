import React, {useContext} from 'react';
import Footer from '../navigation/footer';
import Header from './navbar';
import './tystyles.css';
import CheckoutContext from '../context/checkoutcontext';
import firebase_integration from '../fire.js';
import {Link} from 'react-router-dom';

function ThankYou() {
  const {orderdetails} = useContext(CheckoutContext);
  console.log(orderdetails.orderid)
   firebase_integration.getImageURL('aunty', 'Mehreen', '', 'aunty.svg')
    return (
      <div id = "tybackground">
        <Header/>
        <div className ="container-fluid">
          <div className="row">
            <div className= "col-6">
              <div className = "ordernumbox align-baseline">
                <div id = "ordnum">ORDER ID: #{orderdetails.orderid}</div>
                <div id = "msg">You will receive an Email confirmation shortly!</div>
                <Link to = "/orderhistory">
                <button type="button" id = "trackbtn" class="btn btn-primary">TRACK YOUR ORDER</button>
                </Link>
              </div>
            </div>
            <div className= "col-6">
              <img id="aunty" className = "img-fluid" alt="aunty" />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

  export default ThankYou;