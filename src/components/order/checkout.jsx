import React, { Fragment, useContext } from 'react';
import './orderstyles.css';
import Header from './navbar';
import Footer from '../navigation/footer';
import DiscountContext from '../context/context';

function Checkout() {

    const {discount, setDiscount} = useContext(DiscountContext);
    


    return (
        <div class = "menuback">
            <Header title = "CHECKOUT" link = "/cart"/>
            <div class = "forms">
                <div name = "your-details"><h3><strong>Your Details:</strong></h3></div>
                <form action="/action_page.php">
                    <input type="text" name ="mobile" placeholder="   Mobile Number" required pattern="[0-9]{10}"/>
                    <input type="text" name ="address" placeholder="   Street Address"/><br/>
                    <input type="text" name ="area" placeholder="   Area"/>
                    <input type="text" name ="floor" placeholder="   Floor/Unit"/>
                </form> 
                <br/> <br/>
                <div class = "instructions"><h3><strong>Special Instructions:</strong></h3></div>
                <textarea class = "text-area" placeholder="   Write your text here"></textarea>
                <br/> <br/>
                <div><h3><strong>Select a payment method:</strong></h3></div>
                <div name = "payment">
                    <input type="radio" checked='checked' name = "method"/>
                    <label>Cash on Delivery</label>                   
                    <div class = "confirm">
                        <a onClick = {() => {
                            setDiscount("hello")
                            console.log(discount)}} href = "/orderconfirmed" type="button" class="btn btn-success btn-lg">CONFIRM</a>
                    </div>
                    <br/>
                </div>

            </div>
            <br/> <br/>
            <Footer/>
        </div>
    )
}

export default Checkout;
