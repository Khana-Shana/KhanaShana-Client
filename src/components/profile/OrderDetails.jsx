import React,{ Component, Fragment, useContext, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import OrderHistContext from '../context/orderhistcontext';
import Header from '../navigation/Header';
import Footer from '../navigation/footer';

export default function OrderDetails(){

    const {orderdetails, OrderHistory} = useContext(OrderHistContext);
    let dishes = orderdetails.DishName
    let quantity = orderdetails.DishQuantity
    let orderID = orderdetails.OrderID
    let subtotal = orderdetails.Subtotal
    let discount = orderdetails.discount
    let ordertype = orderdetails.OrderType

    let NameMap = orderdetails.DishName.map((item) => {

        
        return(
            
            <div class = "product-bill row">
                    <div class = "billname">{item}</div>
                </div>

                    
        )
    });

    let QuantMap = orderdetails.DishQuantity.map((item) => {
        return(
            <div class = "product-bill row">
                <div class = "billnums">x {item}</div>
            </div>
        )
    });

    var discount_price = "";
    var discount_bill = 0;

    if(discount === undefined){
        discount_price = "0%";
        discount_price = parseInt(discount_price.split("%",1));
    } else {
        discount_price = parseInt(discount.split("%",1));
    }

    discount_bill = ((100-discount_price)*(subtotal+100))/100;

    return(
        <div>
            <Header/>
        <div class = "order-details-container">
                <div class = "container-bill-order-details">
                    <div class = "order-now">
                            ORDER DETAILS
                    </div>
                    <div class = "product-bill row">
                        <div class = "item col-md-">
                            <div class = "orderID">Order ID: </div>
                        </div>
                        <div class = "item col-md-">
                            <div class = "subtotal">{orderID}</div>
                        </div>
                        <div class = "item col-md-">
                            <div class = "ordertype">Order Type: </div>
                        </div>
                        <div class = "item col-md-">
                            <div class = "subtotal">{ordertype}</div>
                        </div>
                    </div>
                    <div class = "product-bill row">
                        <div class = "item col-md-">
                        {NameMap}
                        </div>
                        <div class = "item col-md-">
                        {QuantMap}
                        </div>
                    </div>
                        <div class = "discount">
                            <div class = "discount-title-order-details">Discount</div>
                            <p class = "discount-price-order-details">{discount_price}%</p>
                        </div>
                        <div class = "product-bill row">
                            <p class = "basketTotalTitle-orderdetails">Original Bill</p>
                            <div class = "basketTotal-orderdetails">Rs {subtotal+100}</div>   
                        </div>
                        <div class = "discountContainer">
                            <p class = "discountedBill-orderdetails">Discounted Bill</p>
                            <p class = "discountedTotal-orderdetails">Rs {discount_bill}</p>
                        </div>
                </div>
            </div>
            <Footer/>
            </div>
             
    );
}