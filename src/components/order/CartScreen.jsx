import React from 'react';
import Header from './navbar';
import Cart from './cart';
import DiscountContextProvider from '../context/discount';
import './orderstyles.css';

function CartScreen() {
    return(
        <div class = "cartback">
            {/* <DiscountContextProvider> */}
            <Header title = "CART" link = "/fullmenu"/>
            <Cart/>
            {/* </DiscountContextProvider> */}
        </div>
    );
}

export default CartScreen;