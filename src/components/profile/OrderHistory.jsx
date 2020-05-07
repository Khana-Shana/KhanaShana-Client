import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from "react-alert";
import Header from '../navigation/Header';
import firebase_integration from '../fire.js';
import OrderHistContext from '../context/orderhistcontext';
import './orderhistorystyles.css';

function OrderHistory() {
    const alert = useAlert();

    /* state declared for reading and setting customer order history from database */
    const [orders, setorders] = useState([]) 

     /* orderhistory context accessed to make details from order history available for order details screen */
    const {OrderHistory} = useContext(OrderHistContext);
    const handleOrderDetails = (order) => {
        OrderHistory(order);
    }

    /* reading order history from database */
    useEffect(() => {
        firebase_integration.database.collection('RegularOrder').orderBy("Date", "desc").onSnapshot((snapshot) => {
            var order_arr = []
            snapshot.docs.forEach(doc => {
                if(doc.data().CustomerID === firebase_integration.auth.currentUser.uid.toString()){
                    order_arr.push(doc.data())
                }
            });
            setorders(order_arr)
        })
    }, orders);   
    
    /* rendering table to display user order history along with buttons for viweing order details and cancelling order */
    return (
        <div className = "orderhistorypage" style = {{backgroundColor:"#99AA93"}}>
            <Header/>
            <div id="orderhistorybox" className="container">
                <div id="boxheading" className="row">
                    <b>Order History</b>
                </div>
                <div className="row">
                    <table id="orderslist" className="table">
                        <thead>
                            <tr>
                            <th style = {{color: "#576271"}} scope="col">Order ID</th>
                            <th style = {{color: "#576271"}} scope="col">Date</th>
                            <th style = {{color: "#576271"}} scope="col">Cost</th>
                            <th style = {{color: "#576271"}} scope="col">Order Tracking</th>
                            <th style = {{color: "#576271"}} scope="col">Order Details</th>
                            <th style = {{color: "#576271"}} scope="col">Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(
                                    (x, i) => {
                                        return (
                                            <tr key = {x.OrderID}>
                                                <td style = {{color: "#576271"}}>{orders[i].OrderID}</td>
                                                <td style = {{color: "#576271"}}>{orders[i].Date.toDate().getDate()+"-"+orders[i].Date.toDate().getMonth()+"-"+orders[i].Date.toDate().getFullYear()}</td>
                                                <td style = {{color: "#576271"}}>Rs. {orders[i].Subtotal}\-</td>
                                                <td><button className = "btn btn-danger redbox" disabled>{orders[i].Tracking}</button></td>
                                                <Link to = "/orderdetails">
                                                <td><button onClick = {handleOrderDetails(orders[i])} className = "btn btn-danger redbox">Order Details</button></td>
                                                </Link>
                                                {orders[i].Tracking === "Cancelled" || orders[i].Tracking === "Completed" || orders[i].Tracking === "Done" || orders[i].Tracking === "Rejected"?
                                                    <td><button className = "btn btn-danger redbox" disabled>Cancel</button></td>:
                                                    <td><button className = "btn btn-danger redbox" onClick = {() => {
                                                        updateDBcancel(orders[i])
                                                    }}>Cancel</button></td>  
                                                }
                                                {/*update order in database when order is cancelled from customer end*/}
                                            </tr>
                                        );
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    /* update order status in database when order gets cancelled by customer */
    
    async function updateDBcancel(Order){
        var time_of_order = Order.Date.seconds
        var time_now = (new Date().getTime()/1000).toFixed(0)
        /* order can only be cancelled within 5 minutes of placing order */
        if(time_now-time_of_order>300){
            alert.show("You can only cancel an order 5 minutes within placing it")
        }
        else {
            firebase_integration.database.collection("RegularOrder").doc(Order.OrderID.toString()).update({
                Tracking: "Cancelled"
            }).catch(function(error) {
                alert.show(error.message)
            });
        }
        
    }
}

export default OrderHistory;