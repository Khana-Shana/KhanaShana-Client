import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {productQuantity, clearProducts} from '../actions/productQuantity';
import {Link} from 'react-router-dom';
import './orderstyles.css';
function Cart({props, productQuantity,clearProducts}) {
    
    console.log(props);

    let productsinCart = [];
    let productsBill = [];

    Object.keys(props.products).forEach(function(item){
        console.log(item);
        console.log(props.products[item].inCart);
        if(props.products[item].inCart) {
            productsinCart.push(props.products[item])
            productsBill.push(props.products[item])
        }
    })

    productsinCart = productsinCart.map((product) => {
        return (
            <Fragment>
            <div class = "product row no-gutters">
                <div class = "delete-icon col-sm- padding-0">
                    <ion-icon onClick={() => clearProducts(product.key)} name="trash-outline" class = "remove"></ion-icon>
                </div>
                <div class = "col-md- padding-0">
                    <img class = "imgcolumn" src = {product.image} />
                </div>
                <div class = "name-col col-md- padding-0">
                    <div class = "pname">{product.name}</div>
                    <div class = "quantity">
                        <ion-icon onClick = {() => productQuantity('increase',product.key)} name = "add-circle-outline" class = "increase">+</ion-icon>
                            {product.numbers}
                        <ion-icon onClick = {() => productQuantity('decrease',product.key)} name = "remove-circle-outline" class = "decrease">-</ion-icon>
                    </div>                     
                </div>
                <div class ="price-col col-md- padding-0">
                    <div class = "priceee">Rs {product.price}</div>
                    <div class = "timerrr">{product.preptime}</div>
                    
                </div>
                <line color = "#fff"/>
            </div>
            </Fragment>
            
        )
    });


    productsBill = productsBill.map((product) => {
        return(
            <Fragment>
                <div class = "product-bill row">
                    <div class = "item col-md-">
                        <div class = "item-name">{product.name}</div>
                    </div>
                    <div class = "item-nums col-md-">
                        <div class = "nums">x {product.numbers}</div>
                    </div>
                    <div class = "item-subtotal col-md-">
                        <div class = "subtotal">Rs {product.numbers*product.price}</div>
                    </div>
                </div>
            </Fragment>
        )
    });


    return (

    <div class = "order">
        <div class = "order-details01">ORDER DETAILS</div>
        <div class = "container-prods">
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
                <h4 class = "basketTotal">Rs {props.cartCost+100}</h4>
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

const mapStateToProps = state => ({
    props: state.basketState
});

export default connect(mapStateToProps,{productQuantity,clearProducts})(Cart);
