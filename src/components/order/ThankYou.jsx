import React from 'react';
import Footer from '../navigation/footer';
import Header from './navbar';
import './tystyles.css';

function ThankYou() {
    return (
      <div id = "tybackground">
        <Header/>
        <div className ="container-fluid">
          <div className="row">
            <div className= "col-6">
              <div className = "ordernumbox align-baseline">
                <div id = "ordnum">ORDER NUMBER: 3O3O25201</div>
                <div id = "msg">You will receive an Email confirmation shortly!</div>
                <button type="button" id = "trackbtn" class="btn btn-primary">TRACK YOUR ORDER</button>
              </div>
            </div>
            <div className= "col-6">
              <img id="aunty" className = "img-fluid" src="./images/aunty.svg" alt="aunty" />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

  export default ThankYou;