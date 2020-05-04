import React from 'react';
import "./menu.css";

export default function LandingCard(props){
    return(
        <div>
          <img
            id={props.DishID}
            className="card-image"
            src="https://firebasestorage.googleapis.com/v0/b/khana-shana-2020.appspot.com/o/Mehreen%2Ftaylor-kiser-POFG828-GQc-unsplash.jpg?alt=media&token=3b2eefe1-7526-4864-a941-f22147ef3068"
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