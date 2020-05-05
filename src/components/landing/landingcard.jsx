import React from 'react';
import "./menu.css";

export default function LandingCard(props){
    return(
        <div >
          <img
            id={props.DishID}
            className="card-image"
            src={props.img}
          />
          <div className="card-content">
            <div className="dish-name"> {props.Name} </div>
            <div className="dish-price"> {props.SalePrice} </div>
            <div className="dishdescription">
              {props.Description}
            </div>
          </div>
        </div>
    );

}