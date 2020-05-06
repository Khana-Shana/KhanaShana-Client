import React from "react";
import Header from "./navbar";
import Menu from "./menu";
import firebase from "../fire";
import { useAlert } from "react-alert";

function MenuScreen(props) {
  const alert = useAlert();
  if (!firebase.getCurrentUsername()) {
    {/*Alert generated if a user tries to access the menu without logging in first. */}
    alert.show("Please login first");
    props.history.replace("/loginpage");
    return null;
  }
  return (
    <div>
      <Header title="MENU" link="/" /> {/* Conditional rendering of the Navbar when the Menu screen is opened. */}
      <Menu />
    </div>
  );
}
export default MenuScreen;
