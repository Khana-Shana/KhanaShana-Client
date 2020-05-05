import React, { Fragment, useContext, useState } from 'react';
import './orderstyles.css';
import Header from './navbar';
import Footer from '../navigation/footer';
import DiscountContext from '../context/context';
import CheckoutContext from '../context/checkoutcontext';
import {Link} from 'react-router-dom';
import firebase_integration from '../fire.js'
import { useAlert } from 'react-alert'

function Checkout(props) {

    const alert = useAlert();

    const {discount, setDiscount} = useContext(DiscountContext);
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [area, setArea] = useState("");
    const [floor, setFloor] = useState("");
    const [deliverytype, setDeliveryType] = useState("");
    const [paymentMethod] = useState("Cash on Delivery")
    var orderid = ""

    const {orderdetails, setOrderID} = useContext(CheckoutContext);
    
    async function PlaceOrder(){
        var CustomerID = firebase_integration.auth.currentUser.uid
        var TodaysDate = new Date()
        var Address = floor+" "+address+" "+area
        var DishNames = []
        var DishQuantities = []
        
        orderdetails.cart.map((item) => 
            DishNames.push(item.Name)
        )
        orderdetails.cart.map((item) => 
            DishQuantities.push(item.quantity)
        ) 
        var instructions = document.getElementById("instruction-box").value
        if(instructions === ""){
            instructions = "None"
        }
        var placeorder = await firebase_integration.database.collection("RegularOrder").add({
            CustomerID: CustomerID,
            Date: TodaysDate,
            Action: "Accept/Reject",
            Address: Address,
            Discount: discount,
            DishName: DishNames,
            DishQuantity: DishQuantities,
            OrderType: deliverytype,
            Subtotal: orderdetails.total,
            Tracking: "Pending",
            MobileNumber: number,
            SpecialInstruction: instructions,
            OrderID: "Not Assigned"
        }).then(function(docRef){
            let promise = new Promise(() => {orderid = docRef.id})
            promise.then(setOrderID(docRef.id));
            firebase_integration.database.collection("RegularOrder").doc(orderid.toString()).update({
                OrderID: orderid
            })

            localStorage.setItem("cart", [])
            props.history.replace("./orderconfirmed")
        })

    }

    function checkInputField(){
        if (
          number === "" ||
          address === "" ||
          area === ""
        ) {
          alert.show("Please fill in all the fields.");
          return false;
        } if (number.length !== 11){
            alert.show("Mobile number must be 11 characters long.")
            return false;
        } else {
            return true;
        }
      };

    return (
        <div class = "menuback">
            <Header title = "CHECKOUT" link = "/cart"/>
            <div class = "forms">
                <div name = "your-details"><h3><strong>Your Details:</strong></h3></div>
                <form>
                    <input value={number} onChange={(e) => setNumber(e.target.value)} type="text" name ="mobile" placeholder="   Mobile Number" required/>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name ="address" placeholder="   Street Address" required/><br/>
                    <input value={area} onChange={(e) => setArea(e.target.value)} type="text" name ="area" placeholder="   Area" required/>
                    <input value={floor} onChange={(e) => setFloor(e.target.value)} type="text" name ="floor" placeholder="   Floor/Unit" requ/>
                    {/* <button type="submit">Submit</button> */}
                </form>
                <br/> <br/> <br/> <br/>
                <div class = "instructions"><h3><strong>Special Instructions:</strong></h3></div>
                <textarea maxlength="700" id="instruction-box" class = "text-area" placeholder="  Write your text here"></textarea>
                <br/> <br/> <br/> <br/>
                <div><h3><strong>Order Type:</strong></h3></div>
                <div name = "order-type-checkout">
                    <input value={deliverytype} onChange={(e) => setDeliveryType("Delivery")} type="radio" name = "method"/>
                    <label>Delivery</label>
                    <br/>
                    <input value={deliverytype} onChange={(e) => setDeliveryType("Takeaway")} type="radio" name = "method"/>
                    <label>Takeaway</label>
                </div>
                <div><h3><strong>Select a payment method:</strong></h3></div>
                <div name = "payment">
                    <input type="checkbox" checked='checked' name = "method"/>
                    <label>Cash on Delivery</label>   
                    {/* <Link to = "/orderconfirmed">               */}
                    <div class = "confirm">                
                        <button
                            onClick = {() => {
                                if(checkInputField()){
                                PlaceOrder()
                            }}}
                            // href = "/orderconfirmed"
                             type="submit" class="btn btn-success btn-lg">CONFIRM</button>                 
                    </div>
                    {/* </Link>   */}
                    <br/>
                </div>
             
            </div>
            <br/> <br/> <br/> <br/>
            <Footer/>
        </div>
    )
}

export default Checkout;