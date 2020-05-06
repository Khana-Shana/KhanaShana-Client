import React, { useState } from "react";
import MenuContext from "./menucontext";


/* menu provider function for child components*/
function MenuContextProvider(props) {
  const [menu, setdsc] = useState(null);

  /* set menu in local storage */
  const setMenu = (value) => {
    localStorage.setItem("menu",JSON.stringify(value))
    setdsc(value);
  };

  /* returning menu provider for children along with menu state and setter functions*/
  return (
    <MenuContext.Provider value={{ menu, setMenu: setMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContextProvider;
