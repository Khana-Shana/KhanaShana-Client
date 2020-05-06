import React, { Component, useState } from "react";
import DailyDealContext from "./dailydealcontext";

function DailyDealContextProvider(props) {
  const [availdaily, setdailydeal] = useState(null);

  const setDaily = (value) => {
    setdailydeal(value);
  };

  return (
    <DailyDealContext.Provider value={{ availdaily, setDaily: setdailydeal }}>
      {props.children}
    </DailyDealContext.Provider>
  );
}

export default DailyDealContextProvider;