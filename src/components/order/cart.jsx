import React, { Component, Fragment, useContext, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cart-actions'
import './orderstyles.css';
import Header from './navbar';
import DiscountContext from '../context/context';
import CheckoutContext from '../context/checkoutcontext';

var discount_price = "";
var discount_bill = 0;
var string_discount = "";

function Cart(props) {
    const {discount, setDiscount} = useContext(DiscountContext);
    const {orderdetails, setCart, setOrderDiscount} = useContext(CheckoutContext);
    

    if(discount === null){
        
        discount_price = "0%";
        string_discount = "0%";
        discount_price = parseInt(discount_price.split("%",1));
    } else {
        string_discount = discount;
        discount_price = parseInt(discount.split("%",1));
    }
    
    function handleRemove(id){
        props.removeItem(id);
    }
    //to add the quantity
    function handleAddQuantity(id){
        props.addQuantity(id);
    }
    //to substruct from the quantity
    function handleSubtractQuantity(id){
        props.subtractQuantity(id);
    }

    let productsinCart = props.items.map((item) => {
        return (
            <div>
            <Fragment>
                
            
            <div class = "product row">
                <div class = "delete-icon col-sm-">
                    <ion-icon onClick={()=>{handleRemove(item.DishID)}} name="trash-outline" class = "remove"></ion-icon>
                </div>
                <div class = "col-md-">
                    <img class = "imgcolumn" src = {item.URL} />
                </div>
                <div class = "name-col col-md-">
                    <div class = "pname">{item.Name}</div>
                    <div class = "quantity">
                        <ion-icon onClick={()=>{handleAddQuantity(item.DishID)}} name = "add-circle-outline" class = "increase">+</ion-icon>
                            {item.quantity}
                        <ion-icon onClick={()=>{handleSubtractQuantity(item.DishID)}} name = "remove-circle-outline" class = "decrease">-</ion-icon>
                    </div>                     
                </div>
                <div class ="price-col col-md-">
                    <div class = "priceee">Rs {item.SalePrice}</div>
                    <div class = "timerrr">{item.PrepTime}</div>
                    
                </div>
            </div>
            </Fragment>
            </div>
        )
    });


    let productsBill = props.items.map((item) => {

        return(
            <Fragment>
                <div class = "product-bill row">
                    <div class = "item col-md-">
                        <div class = "item-name">{item.Name}</div>
                    </div>
                    <div class = "item-nums col-md-">
                        <div class = "nums">x {item.quantity}</div>
                    </div>
                    <div class = "item-subtotal col-md-">
                        <div class = "subtotal">Rs {item.quantity*item.SalePrice}</div>
                    </div>
                </div>
            </Fragment>
        )
    });

    discount_bill = ((100-discount_price)*(props.total+100))/100;
    // console.log(discount_bill)

    return (
        
    <div class = "order">
        {/* {setDiscount(100)} */}
        {/* {console.log(discount)} */}
        <div class = "order-details01">ORDER DETAILS</div>
        <div class = "container-products">
            <div class = "products">
                {productsinCart}
            </div>
        </div>
        <div class = "container-bill">
            <div class = "order-now">
                ORDER NOW
            </div>
            {productsBill}
            <br/> <br/>
            <div class = "ddetails">
                <div class = "delivery"> Delivery</div>
                <p class = "delivery-cost">Rs 100</p>
            </div>
            <div class = "discount">
                <div class = "discount-title">Discount</div>
                <p class = "discount-price">{discount_price}%</p>"
            </div>
            <br/> <br/>
            <div class = "basketTotalContainer">
                <p class = "basketTotalTitle">ORIGINAL BILL</p>
                <p class = "basketTotal">Rs {props.total+100}</p>
            </div>
            <div class = "discountContainer">
                <p class = "discountedBill">DISCOUNTED BILL</p>
                <p class = "discountedTotal">Rs {discount_bill}</p>
            </div>
            <br/>
            <Link to = "/checkout">
            <div class = "check">
            <button onClick = {
                ()=>{
                    
    // if(discount_price === "0%){
    //     setOrderDiscount("0%")
    // } else {
    //     setOrderDiscount(discount)
    // }
    setOrderDiscount(string_discount)
                setCart(props.items)
                console.log(props.items)           
            
            }} type="button" class="btn btn-success btn-lg">CHECKOUT</button>
            </div>
            </Link>
        </div>
     </div>
   
     
    )
}

const mapStateToProps = (state)=>{
    return{
        items: state.cart,
        addedItems: state.addedItems,
        total: state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)