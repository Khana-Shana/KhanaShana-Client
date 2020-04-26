import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addBasket} from '../actions/addAction.jsx';
import Card from './Card.jsx';
import products from './items.js';
import './orderstyles.css';
import Header from './navbar.jsx';

function createCard(item){
    return(

        <Card 
            id = {item.item_no}
            name = {item.name}
            price = {item.price}
            numbers = {item.numbers}
            incart = {item.inCart}
            img = {item.image}
            food_category = {item.food_category} 
        />  
);
}
let filtered = []

let allList = []
function makeAll(){
    filtered.splice(0,filtered.length)
    Object.keys(products).forEach(function(item){
        filtered.push(products[item])
    })
}



let desiList = []
function makeDesi(){
    filtered.splice(0,filtered.length)
        Object.keys(products).forEach(function(item){
            if(products[item].food_category === 'desi'){
                filtered.push(products[item])
            }
        })
}

let chineseList = []
function makeChinese(){
    filtered.splice(0,filtered.length)
        Object.keys(products).forEach(function(item){
            if(products[item].food_category === 'chinese'){
                filtered.push(products[item])
            }
        })
}

let italianList = []
function makeItalian(){
    filtered.splice(0,filtered.length)
        Object.keys(products).forEach(function(item){
            if(products[item].food_category === 'italian'){
                filtered.push(products[item])
            }
        })
}

let sandwichList = []
function makeSandwich(){
    filtered.splice(0,filtered.length)
        Object.keys(products).forEach(function(item){
            if(products[item].food_category === 'sandwich'){
                filtered.push(products[item])
            }
        })
}

let burgersList = []
function makeBurgers(){
    filtered.splice(0,filtered.length)
        Object.keys(products).forEach(function(item){
            if(products[item].food_category === 'burgers'){
                filtered.push(products[item])
            }
        })
}

let dessertsList = []
function makeDesserts(){
    filtered.splice(0,filtered.length)
        Object.keys(products).forEach(function(item){
            if(products[item].food_category === 'desserts'){
                filtered.push(products[item])
            }
        })
    }

const Menu = (props) => {
    
    
    return (
        
        <div class = "container-menuuu">
            <Header/>
         <div class = "menuuu">MENU</div>
         <div class="col-md-12 text-center">
            <div class="btn-group btn-group-lg">
            <a href="#" class="btn btn-primary" aria-pressed="true" onClick = {
                makeAll
            }>All</a>
            <a href="#" class="btn btn-primary" onClick = {
                makeDesi
            }>Desi</a>
            <a href="#" class="btn btn-primary" onClick = {
                makeChinese
            }>Chinese</a>
            <a href="#" class="btn btn-primary"onClick = {
                makeItalian
            }>Italian</a>
            <a href="#" class="btn btn-primary"onClick = {
                makeSandwich
            }>Sandwiches</a>
            <a href="#" class="btn btn-primary"onClick = {
                makeBurgers
            }>Burgers</a>
            <a href="#" class="btn btn-primary" onClick = {
                makeDesserts
            }>Desserts</a>

            </div>
        </div>
            <div class = "cards99">
                {filtered.map(createCard)}
            </div>

            <div>
                <ul class="pagination pagination-lg justify-content-center">
                    <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                    <li class="page-item"><a class="page-link" href="#">7</a></li>
                    <li class="page-item"><a class="page-link" href="#">8</a></li>
                    <li class="page-item"><a class="page-link" href="#">9</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </div>
        </div>
    );
}

export default connect(null,{addBasket})(Menu)