import React from 'react';
import Header from './navbar';
import Cart from './cart';
import DiscountContextProvider from '../context/discount';

function CartScreen() {
    return(
        <div>
            {/* <DiscountContextProvider> */}
            <Header/>
            <Cart/>
            {/* </DiscountContextProvider> */}
        </div>
    );
}

export default CartScreen;