import React, { Fragment, useContext, useState } from 'react';
import './orderstyles.css';
import Header from './navbar';
import Footer from '../navigation/footer';
import DiscountContext from '../context/context';
import CheckoutContext from '../context/checkoutcontext';

function Checkout() {

    const {discount, setDiscount} = useContext(DiscountContext);
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [area, setArea] = useState("");
    const [floor, setFloor] = useState("");
    const [deliverytype, setDeliveryType] = useState("");
    const [paymentMethod] = useState("Cash on Delivery")

    const {orderdetails} = useContext(CheckoutContext);
    console.log(orderdetails)
    
    return (
        <div class = "menuback">
            <Header title = "CHECKOUT" link = "/cart"/>
            <div class = "forms">
                <div name = "your-details"><h3><strong>Your Details:</strong></h3></div>
                <form action="/action_page.php">
                    <input required="required" value={number} onChange={(e) => setNumber(e.target.value)} type="text" name ="mobile" placeholder="   Mobile Number" required pattern="[0-9]{10}"/>
                    <input required="required" value={address} onChange={(e) => setAddress(e.target.value)} type="text" name ="address" placeholder="   Street Address"/><br/>
                    <input required="required" value={area} onChange={(e) => setArea(e.target.value)} type="text" name ="area" placeholder="   Area"/>
                    <input required="required" value={floor} onChange={(e) => setFloor(e.target.value)} type="text" name ="floor" placeholder="   Floor/Unit"/>
                </form> 
                <br/> <br/>
                <div class = "instructions"><h3><strong>Special Instructions:</strong></h3></div>
                <textarea class = "text-area" placeholder="   Write your text here"></textarea>
                <br/> <br/>
                <div><h3><strong>Order Type:</strong></h3></div>
                <div name = "order-type-checkout">
                    <input value={deliverytype} onChange={(e) => setDeliveryType("Delivery")} type="radio" name = "method"/>
                    <label>Delivery</label>
                    <input value={deliverytype} onChange={(e) => setDeliveryType("Takeaway")} type="radio" name = "method"/>
                    <label>Takeaway</label>
                </div>
                <div><h3><strong>Select a payment method:</strong></h3></div>
                <div name = "payment">
                    <input type="radio" checked='checked' name = "method"/>
                    <label>Cash on Delivery</label>                   
                    <div class = "confirm">
                        <a
                         onClick = {() => {setDiscount("0%");
                         console.log(discount)
                        console.log(number);
                        console.log(address);
                        console.log(area);
                        console.log(floor); 
                        console.log(deliverytype)}}
                            // href = "/orderconfirmed"
                             type="button" class="btn btn-success btn-lg">CONFIRM</a>
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