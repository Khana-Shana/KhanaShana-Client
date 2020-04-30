import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card.jsx";
import { Container } from "react-bootstrap";

class Menu extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="menuuu">MENU</div>
       
          {/* {this.props.items.map((item) => {
            return(
                <Card 
                    id = {item.id}
                    title = {item.title}
                    desc = {item.desc}
                    price = {item.price}
                    img = {item.img}
                />  
            )  
        })} */}
          <div class="container-fluid ml-2 mr-2">
            <div class="row mg">
              {this.props.items.map((item) => {
                return (
                  <div class=" text-center col-md-3 ml-5 mr-5">
                    <div>
                      <Card
                        id={item.id}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        img={item.img}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Menu);
