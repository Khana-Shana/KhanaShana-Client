import React from "react";
import DiscountContext from "../context/context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './deals.css';
import firebase_integration from '../fire.js'
import firebase from '../fire';
import { Link, withRouter } from "react-router-dom";
import { withAlert } from 'react-alert'
import { Button } from "rsuite";
// import './index.css';

class Wheel extends React.Component {
  static contextType = DiscountContext;

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedItem: null,
      button: false
    };
    this.selectItem = this.selectItem.bind(this);
    // this.givediscount = this.givediscount.bind(this);
    this.run = false;
    this.value = 0;
    this.i = 0;
    this.buttondisable = false
    // this.context.setDiscount();
  }

  selectItem() {
    
    
    this.value = Math.floor(Math.random() * this.props.items.length);
    console.log(this.value)
    // givediscount();
    
    // console.log(this.context)
    
    

    // if (this.props.onSelectItem) {
    //   this.props.onSelectItem(selectedItem);
    // }
    // console.log(this.props.items[selectedItem]);
    this.setState({ selectedItem: this.value });
    // console.log(this.state.selectedItem)
    // givediscount();
   
  }

  render() {
    // const { setDiscount } = this.context;
    // console.log(this.context)
    const alert = this.props.alert;
    const { selectedItem, button } = this.state;
    // const { button } = this.state;
    const { history, items } = this.props;

    const wheelVars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    };
    const spinning = selectedItem !== null ? "spinning" : "";
    console.log(this.context)

    
  const givediscount = (resolvepromise) => {
    if(resolvepromise === true) {
      console.log(this.value);
      this.context.setDiscount(this.props.items[this.value]);
      console.log(this.context);
    }
    else {
      alert.show("Discount already availed. Please try again next week!")
      console.log(this.value);
      // this.context.setDiscount(0);
      console.log(this.context);
    }
  };

    return (
      <div className="wheel-container">      
        <div
          className={`wheel ${spinning}`}
          style={wheelVars}
          onClick={() => {          
            if(!firebase.getCurrentUsername()) {
            // not logged in
            alert.show('Please login first')
            this.props.history.replace('/loginpage')
            return null
            }
            else{
            var UserID = firebase_integration.auth.currentUser.uid
            firebase_integration.database.collection("CustomerDatabase").where("CustomerID", "==", UserID.toString()).get().then((docs) => {
              var mydata = 0              
              docs.forEach((doc) => {
                mydata = doc.data()
              });
              if(mydata.WheelUsed === false){
                let promise = new Promise (() => {this.selectItem()})
                console.log("Allow Discount")
                promise.then(givediscount(true))
                var todaysDate = new Date()
                var disc = parseInt(this.props.items[this.value].substring(0,this.props.items[this.value].length-1))
                firebase_integration.database.collection("CustomerDatabase").doc(UserID.toString()).update({
                  WheelUsed: true,
                  DateWheelUsed: todaysDate,
                  Discount: disc
                })
                this.setState({ button: true });

              }
              else if (mydata.WheelUsed === true){
                console.log("Don't Allow Discount")
                this.context.setDiscount("0%")
                alert.show("Discount already availed. Try again next week!")
                // this.buttondisable = true
                this.setState({ button: false });
              }
            })
          }}}
        >
          {items.map((item, index) => (
            <div
              className="wheel-item"
              key={index}
              style={{ "--item-nb": index }}
            >
              {item}
            </div>
          ))}

         
        </div>

        <div>
          
        {button ?         
          <Link to = "/fullmenu">
          <button
            type="button"
            id="GFG"
            // href="/fullmenu"
            className="wheeldealbtn button-error pure-button "
            // onClick = {givediscount}
          >
            Avail Discount
          </button>
          </Link>
          :
          <Button
            type="button"
            id="GFG"
            className="wheeldealbtn button-error pure-button "
          disabled>
            Avail Discount
          </Button>}
        </div>
          
      </div>
       
    );
  }
}

export default withRouter(withAlert()(Wheel));
