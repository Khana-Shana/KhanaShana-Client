import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { FetchItems, FetchCart, addToCart } from "./actions/cart-actions";
import { Tabs, Tab } from "react-bootstrap-tabs";
import CardScreen from "./CardScreen";
import "./orderstyles.css";
import MenuContext from "../context/menucontext";

function Menu(props) {
// const {menu, setMenu} = React.useContext(MenuContext)

function getMenu(){
  const localmenu = localStorage.getItem("menu")
  return localmenu ? JSON.parse(localmenu) : []
}

const localmenu = getMenu();

useEffect(()=>{
  props.FetchItems(localmenu)
},[])

console.log(props.items)





  let All = [];
  function makeAll() {

    All = props.items;
  }

  let Desi = [];
  function makeDesi() {

    props.items.map((item) => {
      if (item.Category === "Desi") {
        Desi.push(item);
      }
    });
  }

  let Chinese = [];
  function makeChinese() {

    props.items.map((item) => {
      if (item.Category === "Chinese") {
        Chinese.push(item);
      }
    });
  }

  let Italian = [];
  function makeItalian() {

    props.items.map((item) => {
      if (item.Category === "Italian") {
        Italian.push(item);
      }
    });
  }

  let Sandwich = [];
  function makeSandwich() {

    props.items.map((item) => {
      if (item.Category === "Sandwich") {
        Sandwich.push(item);
      }
    });
  }

  let Burger = [];
  function makeBurgers() {

    props.items.map((item) => {
      if (item.Category === "Burger") {
        Burger.push(item);
      }
    });
  }

  let Dessert = [];
  function makeDesserts() {

    props.items.map((item) => {
      if (item.Category === "Desserts") {
        Dessert.push(item);
      }
    });
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
        <div>
          <div styles = {{marginTop:"0%", paddingTop:"0%"}} className="tabs">
            <Tabs style = {{color:"white"}}>
              <Tab label="All">
                <CardScreen data={All} />
              </Tab>
              <Tab label="Desi">
                <CardScreen data={Desi} />
              </Tab>
              <Tab label="Desserts">
                <CardScreen data={Dessert} />
              </Tab>
              <Tab label="Italian">
                <CardScreen data={Italian} />
              </Tab>
              <Tab label="Burgers">
                <CardScreen data={Burger} />
              </Tab>
              <Tab label="Chinese">
                <CardScreen data={Chinese} />
              </Tab>
              <Tab label="Sandwiches">
                <CardScreen data={Sandwich} />
              </Tab>
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
    FetchCart: (items) => {
      dispatch(FetchCart(items));
    },
    addToCart: (id)=>{dispatch(addToCart(id))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
