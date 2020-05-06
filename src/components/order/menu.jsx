import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { FetchItems, FetchCart, addToCart } from "./actions/cart-actions";
import { Tabs, Tab } from "react-bootstrap-tabs";
import CardScreen from "./CardScreen";
import "./orderstyles.css";

function Menu(props) {
  function getMenu() {
    const localmenu = localStorage.getItem("menu");
    return localmenu ? JSON.parse(localmenu) : [];
  }

  const localmenu = getMenu();

  useEffect(() => {
    props.FetchItems(localmenu);
  }, []);

  let All = [];
  function makeAll() {
    /* A function to cater to all the items in the menu. */
    All = props.items;
  }

  let Desi = [];
  function makeDesi() {
    /* A function to display items that only belong to the 'Desi' category. */
    props.items.map((item) => {
      if (item.Category === "Desi") {
        Desi.push(item);
      }
    });
  }

  let Chinese = [];
  function makeChinese() {
    /* A function to display items that only belong to the 'Menu' category. */
    props.items.map((item) => {
      if (item.Category === "Chinese") {
        Chinese.push(item);
      }
    });
  }

  let Italian = [];
  function makeItalian() {
    /* A function to display items that only belong to the 'Italian' category. */
    props.items.map((item) => {
      if (item.Category === "Italian") {
        Italian.push(item);
      }
    });
  }

  let Sandwich = [];
  function makeSandwich() {
    /* A function to display items that only belong to the 'Sandwich' category. */
    props.items.map((item) => {
      if (item.Category === "Sandwich") {
        Sandwich.push(item);
      }
    });
  }

  let Burger = [];
  function makeBurgers() {
    /* A function to display items that only belong to the 'Burger' category. */
    props.items.map((item) => {
      if (item.Category === "Burger") {
        Burger.push(item);
      }
    });
  }

  let Dessert = [];
  function makeDesserts() {
    /* A function to display items that only belong to the 'Dessert' category. */
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
          <div styles={{ marginTop: "0%", paddingTop: "0%" }} className="tabs">
            <Tabs style={{ color: "white" }}>
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
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
