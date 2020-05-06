import React from "react";
import { FetchItems } from "./actions/cart-actions";

var temp = [];
async function fetchMenu() {
  var docs = await firebase_integration.database.collection("Menu").get();
  var menu_items = [];
  docs.forEach((doc) => {
    menu_items.push(doc.data());
  });
  temp = menu_items;
}

async function menuRead() {
  await fetchMenu();
}

await menuRead();

export const DataRead = (props) => {
  function handleData(items) {
    props.FetchItems(items);
  }
  handleData(temp);
};

const mapStateToProps = (state) => {
  return {
    items: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    FetchItems: (items) => {
      dispatch(FetchItems(items));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DataRead);
