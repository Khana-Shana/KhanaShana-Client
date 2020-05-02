import React from "react";
import DiscountContext from "../context/context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './deals.css';


// import './index.css';

export default class Wheel extends React.Component {
  static contextType = DiscountContext;

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
    // this.givediscount = this.givediscount.bind(this);
    this.run = false;
    this.value = 0;
    this.i = 0;
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
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    };
    const spinning = selectedItem !== null ? "spinning" : "";

    
  const givediscount = () => {
    console.log(this.value);
    this.context.setDiscount(this.props.items[this.value]);
    console.log(this.context);
  };

    

      
    

    return (
      <div className="wheel-container">      
        <div
          className={`wheel ${spinning}`}
          style={wheelVars}
          onClick={() => {
            let promise = new Promise (() => {this.selectItem()})
            promise.then(givediscount())
          }}
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
        <Link to = "/fullmenu">
        <button
            type="button"
            id="GFG"
            // href="/fullmenu"
            className="wheeldealbtn button-error pure-button "
            onClick = {givediscount}
          >
            Avail Discount
          </button>
          </Link>
      </div>
       
    );
  }
}
