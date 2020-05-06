import React, { Component, useState } from "react";
import MenuContext from "./menucontext";

function MenuContextProvider(props) {
  const [menu, setdsc] = useState(null);

  const setMenu = (value) => {
    // localStorage.setItem("menu",JSON.stringify(value))
    setdsc(value);
  };

  return (
    <MenuContext.Provider value={{ menu, setMenu: setMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContextProvider;
