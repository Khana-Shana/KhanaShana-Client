import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity, FetchCart} from './actions/cart-actions'
import './orderstyles.css';
import Header from './navbar';
import firebase_integration from "../fire";
// import DiscountContext from '../context/context';
import CheckoutContext from '../context/checkoutcontext';

var discount_price = 0;
var discount_bill = 0;
var string_discount = "";

function Cart(props) {

    function getCart(){
        const localcart = localStorage.getItem("cart")
        return localcart ? JSON.parse(localcart) : []
    }
    // const {discount, setDiscount} = useContext(DiscountContext);
    // let discount = 0;
    const localcart = getCart();    
    console.log(localcart)
    

    // localStorage.setItem("cart", JSON.stringify(props.items))
    const [userdisc, setdisc] = useState(0)
    const {orderdetails, setCart, setOrderDiscount, setTotal} = useContext(CheckoutContext);

    useEffect(() => {
        var UserID = firebase_integration.auth.currentUser.uid
        firebase_integration.database.collection("CustomerDatabase").where("CustomerID", "==", UserID.toString()).onSnapshot((docs) => {
          var mydata = 0              
          docs.forEach((doc) => {
            mydata = doc.data().Discount
          });        
          setdisc(mydata)
          props.FetchCart(localcart)
        })
      }, []);

    // discount_price = 10;
    discount_price = userdisc
    // if(discount === null){
        
    //     discount_price = "0%";
    //     string_discount = "0%";
    //     discount_price = parseInt(discount_price.split("%",1));
    // } else {
    //     string_discount = discount;
    //     discount_price = parseInt(discount.split("%",1));
    // }
    
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
                <div class = "col-sm-">
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

    return (
        
    <div class = "order">
        <div class = "order-details01"><b>ORDER DETAILS</b></div>
        <div class = "container-products">
            <div class = "products">
                {productsinCart}
            </div>
        </div>
        <div class = "container-bill">
            <div class = "order-now">
                ORDER NOW
            </div>
            <div class = "prod-cont">
            {productsBill}
            </div>
            {/* <br/> */}
            <div class = "extra-cont">
            <div class = "ddetails">
                <div class = "delivery"> Delivery</div>
                <p class = "delivery-cost">Rs 100</p>
            </div>
            <div class = "discount">
                <div class = "discount-title">Discount</div>
                <p class = "discount-price">{discount_price}%</p>
            </div>
            {/* <br/> */}
            </div>
            <br/>
            <div class = "basketTotalContainer">
                <p class = "basketTotalTitle">Total</p>
                <p class = "basketTotal">Rs {props.total+100}</p>
            </div>
            <div class = "discountContainer">
                <p class = "discountedBill">Discounted Total</p>
                <p class = "discountedTotal">Rs {discount_bill}</p>
            </div>
            {/* {console.log(props.items.length)} */}
            {props.items.length !== 0 ?  
            <Link to = "/checkout">
            <div class = "check">
            <button onClick = {
                ()=>{setOrderDiscount(string_discount)
                setCart(props.items)
                setTotal(props.total)
                console.log(props.items)}} type="button" class="btn btn-success btn-lg">CHECKOUT</button>
            </div>
            </Link> :
            <div class = "check">
            <button type="button" class="btn btn-success btn-lg" disabled>CHECKOUT</button>
            </div>}

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
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))},
        FetchCart: (items)=>{dispatch(FetchCart(items))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)