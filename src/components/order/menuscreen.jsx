import React from "react";
import { useAlert } from "react-alert";
import Header from "./navbar";
import Menu from "./menu";
import firebase from "../fire";

/* renders Menu Screen and adds Header to top */

function MenuScreen(props) {
  const alert = useAlert();

  /* allow user to access screen only if logged in otherwise redirect to login page */
  if (!firebase.getCurrentUsername()) {
    alert.show("Please login first");
    props.history.replace("/loginpage");
    return null;
  }
  /* passing screen title and routing paths to header */
  return (
    <div>
      <Header title="MENU" link="/" />
      <Menu />
    </div>
  );
}
export default MenuScreen;
