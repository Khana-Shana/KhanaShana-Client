import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchItems, FetchCart, addToCart } from "./actions/cart-actions";
import { Tabs, Tab } from "react-bootstrap-tabs";
import CardScreen from "./CardScreen";
import "./orderstyles.css";

function Menu(props) {
  /* function declaration to get Menu from localstorage */

  function getMenu() {
    const localmenu = localStorage.getItem("menu");
    return localmenu ? JSON.parse(localmenu) : [];
  }

  const localmenu = getMenu();

  /* setting menu in reducer for global use using a dispatcher function */

  useEffect(() => {
    props.FetchItems(localmenu);
  }, []);

  /* functions to filter out menu items based on different categories and push them into their respective arrays */

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
      if (item.Category === "Dessert") {
        Dessert.push(item);
      }
    });
  }

  let Pizza = [];
  function makePizza() {
    props.items.map((item) => {
      if (item.Category === "Pizza") {
        Pizza.push(item);
      }
    });
  }

  let Deals = [];
  function makeDeals() {
    props.items.map((item) => {
      if (item.Category === "Daily Deal" || item.Category === "Weekly Deal") {
        Deals.push(item);
      }
    });
  }

  /* creating a filtered array of menu items for each category */

  makeAll();
  makeBurgers();
  makeDesi();
  makeDesserts();
  makeItalian();
  makeSandwich();
  makeChinese();
  makePizza();
  makeDeals();

  return (
    <div class="menuback">
      <div className="container-fluid">
        <div>
          <div styles={{ marginTop: "0%", paddingTop: "0%" }} className="tabs">
            <Tabs className = "myClass" style={{ color: "white" }}>
              <Tab label="All">
                <CardScreen data={All} />
              </Tab>
              <Tab label="Burgers">
                <CardScreen data={Burger} />
              </Tab>
              <Tab label="Chinese">
                <CardScreen data={Chinese} />
              </Tab>
              <Tab label="Desi">
                <CardScreen data={Desi} />
              </Tab>
              <Tab label="Dessert">
                <CardScreen data={Dessert} />
              </Tab>
              <Tab label="Italian">
                <CardScreen data={Italian} />
              </Tab>
              <Tab label="Pizza">
                <CardScreen data={Pizza} />
              </Tab>
              <Tab label="Sandwiches">
                <CardScreen data={Sandwich} />
              </Tab>
              <Tab label="Deals">
                <CardScreen data={Deals} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

/* maps menu items from reducer to our Menu component */
/* this function is called every time when the Redux store state changes */

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

/* connects dispatcher functions for different action.types from the reducer to our Menu Component and arguments required */

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
