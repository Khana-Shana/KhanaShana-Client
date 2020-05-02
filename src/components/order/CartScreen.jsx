import React from 'react';
import Header from './navbar';
import Cart from './cart';
import DiscountContextProvider from '../context/discount';

function CartScreen() {
    return(
        <div>
            {/* <DiscountContextProvider> */}
            <Header link = "/fullmenu"/>
            <Cart/>
            {/* </DiscountContextProvider> */}
        </div>
    );
}

export default CartScreen;