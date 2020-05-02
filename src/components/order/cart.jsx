import React, { Component, Fragment, useContext } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cart-actions'
import './orderstyles.css';
import Header from './navbar';
import DiscountContext from '../context/context';

function Cart(props) {
    const {discount, setDiscount} = useContext(DiscountContext);
    console.log(discount)
    
    
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
                    <ion-icon onClick={()=>{handleRemove(item.id)}} name="trash-outline" class = "remove"></ion-icon>
                </div>
                <div class = "col-md-">
                    <img class = "imgcolumn" src = {item.img} />
                </div>
                <div class = "name-col col-md-">
                    <div class = "pname">{item.title}</div>
                    <div class = "quantity">
                        <ion-icon onClick={()=>{handleAddQuantity(item.id)}} name = "add-circle-outline" class = "increase">+</ion-icon>
                            {item.quantity}
                        <ion-icon onClick={()=>{handleSubtractQuantity(item.id)}} name = "remove-circle-outline" class = "decrease">-</ion-icon>
                    </div>                     
                </div>
                <div class ="price-col col-md-">
                    <div class = "priceee">Rs {item.price}</div>
                    <div class = "timerrr">{item.desc}</div>
                    
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
                        <div class = "item-name">{item.title}</div>
                    </div>
                    <div class = "item-nums col-md-">
                        <div class = "nums">x {item.quantity}</div>
                    </div>
                    <div class = "item-subtotal col-md-">
                        <div class = "subtotal">Rs {item.quantity*item.price}</div>
                    </div>
                </div>
            </Fragment>
        )
    });


    return (
        
    <div class = "order">
        {/* {setDiscount(100)} */}
        {console.log(discount)}
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
            <div class = "basketTotalContainer">
                <h4 class = "basketTotalTitle">TOTAL BILL</h4>
                <h4 class = "basketTotal">Rs {props.total+100}</h4>
            </div>
            <br/>
            <Link to = "/checkout">
            <div class = "check">
            <button type="button" class="btn btn-success btn-lg">CHECKOUT</button>
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