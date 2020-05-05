import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card.jsx";
import { Container } from "react-bootstrap";
import firebase_integration from "../fire";
import FilterResults from "react-filter-search";
import { FetchItems } from "./actions/cart-actions";
import { Tabs, Tab } from "react-bootstrap-tabs";
import CardScreen from "./CardScreen";

function Menu(props) {
  // const menu = localStorage.getItem("menu")
  // JSON.parse(menu)
  // console.log(menu)
  // let All = props.items;
  // props.FetchItems(menu)
  var menudata = [];

  useEffect(() => {
    firebase_integration.database
      .collection("Menu")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          menudata.push(doc.data());
          localStorage.setItem("menu", JSON.stringify(menudata));
        });
        props.FetchItems(menudata);
      });
  }, menudata);

  let All = [];
  function makeAll() {
    // filtered.splice(0,filtered.length)
    All = props.items;
  }

  let Desi = [];
  function makeDesi() {
    // filtered.splice(0,filtered.length)
    props.items.map((item) => {
      if (item.Category === "Desi") {
        Desi.push(item);
      }
    });
  }

  let Chinese = [];
  function makeChinese() {
    // filtered.splice(0,filtered.length)
    props.items.map((item) => {
      if (item.Category === "Chinese") {
        Chinese.push(item);
      }
    });
  }

  let Italian = [];
  function makeItalian() {
    // filtered.splice(0,filtered.length)
    props.items.map((item) => {
      if (item.Category === "Italian") {
        Italian.push(item);
      }
    });
  }

  let Sandwich = [];
  function makeSandwich() {
    // filtered.splice(0,filtered.length)
    props.items.map((item) => {
      if (item.Category === "Sandwich") {
        Sandwich.push(item);
      }
    });
  }

  let Burger = [];
  function makeBurgers() {
    // filtered.splice(0,filtered.length)
    props.items.map((item) => {
      if (item.Category === "Burgers") {
        Burger.push(item);
      }
    });
  }

  let Dessert = [];
  function makeDesserts() {
    // filtered.splice(0,filtered.length)
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
          <div className="tabs">
            {/* onSelect={(index, label) => console.log(label + ' selected')} */}
            <Tabs>
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
  };
};
// export default connect(mapStateToProps,mapDispatchToProps)(DataRead)
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
