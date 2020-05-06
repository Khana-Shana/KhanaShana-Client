import React from "react";
import Header from "./navbar";
import Menu from "./menu";
import firebase from "../fire";
import { useAlert } from "react-alert";

function MenuScreen(props) {
  const alert = useAlert();
  if (!firebase.getCurrentUsername()) {
    alert.show("Please login first");
    props.history.replace("/loginpage");
    return null;
  }
  return (
    <div>
      <Header title="MENU" link="/" />
      <Menu />
    </div>
  );
}
export default MenuScreen;
