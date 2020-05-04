import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card.jsx";
import { Container } from "react-bootstrap";
import firebase_integration from "../fire";
import FilterResults from "react-filter-search";
import { FetchItems } from "./actions/cart-actions";
import {Tabs, Tab} from 'react-bootstrap-tabs';
import CardScreen from './CardScreen';


function Menu(props) {


  var menudata = [];
  useEffect(() => {
    firebase_integration.database
      .collection("Menu")
      .get()
      .then((docs) => {
        
        docs.forEach((doc) => {
          menudata.push(doc.data());
        });
        // setData(menudata)
        // console.log(menudata)
        // let lol = data
        props.FetchItems(menudata);
      });
  }, menudata);

  // let All = props.items;

let All = []
function makeAll(){
  // filtered.splice(0,filtered.length)
      All = props.items
 
}

let Desi = []
function makeDesi(){
  // filtered.splice(0,filtered.length)
      props.items.map((item)=>{
        if(item.Category === "Desi"){
          // console.log(item)
          Desi.push(item)
        }
      })

   
}


let Chinese = []
function makeChinese(){
  // filtered.splice(0,filtered.length)
    props.items.map((item)=>{
      if(item.Category === "Chinese"){
        // console.log(item)
        Chinese.push(item)
      }
    })

  
 
}


let Italian = []
function makeItalian(){
  // filtered.splice(0,filtered.length)
    props.items.map((item)=>{
      if(item.Category === "Italian"){
        // console.log(item)
        Italian.push(item)
      }
    })

 
}


let Sandwich = []
function makeSandwich(){
  // filtered.splice(0,filtered.length)
    props.items.map((item)=>{
      if(item.Category === "Sandwich"){
        // console.log(item)
        Sandwich.push(item)
      }
    })

 
}


let Burger = []
function makeBurgers(){
  // filtered.splice(0,filtered.length)
    props.items.map((item)=>{
      if(item.Category === "Burgers"){
        // console.log(item)
        Burger.push(item)
      }
    })

  
 
}


let Dessert = []
function makeDesserts(){
  // filtered.splice(0,filtered.length)
    props.items.map((item)=>{
      if(item.Category === "Desserts"){
        // console.log(item)
        Dessert.push(item)
      }
    })

 
}

  makeAll();
  makeBurgers();
  makeDesi();
  makeDesserts();
  makeItalian();
  makeSandwich();
  makeChinese();




  return (

    <div class="menuback">
      <div className="container-fluid">
        {/* {console.log(props.items)} */}
        <div>
        <div className = "tabs">

        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
    <Tab label="All"><CardScreen data = {All}/></Tab>
    <Tab label="Desi"><CardScreen data = {Desi}/></Tab>
    <Tab label="Desserts"><CardScreen data = {Dessert}/></Tab>
    <Tab label="Italian"><CardScreen data = {Italian}/></Tab>
    <Tab label="Burgers"><CardScreen data = {Burger}/></Tab>
    <Tab label="Chinese"><CardScreen data = {Chinese}/></Tab>
    <Tab label="Sandwiches"><CardScreen data = {Sandwich}/></Tab>
</Tabs>

</div>
          
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FetchItems: (items) => {
      dispatch(FetchItems(items));
    },
  };
};
// export default connect(mapStateToProps,mapDispatchToProps)(DataRead)
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
