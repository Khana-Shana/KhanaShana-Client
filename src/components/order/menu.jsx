import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from './Card.jsx';


 class Menu extends Component{
    
    render(){

        return(
            <div className="container">
                <div className="menuuu">MENU</div>
                <div className="box">
                    {this.props.items.map((item) => {
            return(
                <Card 
                    id = {item.id}
                    title = {item.title}
                    desc = {item.desc}
                    price = {item.price}
                    img = {item.img}
                />  
            )  
        })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }

export default connect(mapStateToProps)(Menu)