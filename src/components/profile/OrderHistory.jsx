import React, { useState, useEffect } from 'react';
import Header from '../navigation/Header';
import firebase_integration from '../fire.js';
import './orderhistorystyles.css';

function OrderHistory() {
    
    const [orders, setorders] = useState([]) 
    
    useEffect(() => {
        firebase_integration.database.collection('RegularOrder').orderBy("Date", "desc").onSnapshot((snapshot) => {
            var order_arr = []
            snapshot.docs.forEach(doc => {
                if(doc.data().CustomerID === firebase_integration.auth.currentUser.uid.toString()){
                    order_arr.push(doc.data())
                }
            });
            setorders(order_arr)
            console.log(order_arr)
        })
    }, orders);   
    
    return (
        <div id="orderhistorypage">
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
                            <th style = {{color: "#576271"}} scope="col">Reorder</th>
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
                                                <td><button className = "btn btn-danger redbox">Order Details</button></td>
                                                <td><button className = "btn btn-danger redbox">Reorder</button></td>
                                                {orders[i].Tracking === "Cancelled" || orders[i].Tracking === "Completed" || orders[i].Tracking === "Done" || orders[i].Tracking === "Rejected"?
                                                    <td><button className = "btn btn-danger redbox" disabled>Cancel</button></td>:
                                                    <td><button className = "btn btn-danger redbox" onClick = {() => {
                                                        updateDBcancel(orders[i].OrderID)
                                                    }}>Cancel</button></td>   
                                                }
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
    async function updateDBcancel(OrderID){
        firebase_integration.database.collection("RegularOrder").doc(OrderID.toString()).update({
            Tracking: "Cancelled"
        }).catch(function(error) {
            alert(error.message)
        });
    }
}

export default OrderHistory;