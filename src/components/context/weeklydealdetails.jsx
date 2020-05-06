import React, { Component, useState } from "react";
import WeeklyDealContext from "./weeklydealcontext";

function WeeklyDealContextProvider(props) {
  const [availweekly, setweeklydeal] = useState(null);

  const setWeekly = (value) => {
    // localStorage.setItem("weeklydeal",JSON.stringify(value))
    setweeklydeal(value);
  };

  return (
    <WeeklyDealContext.Provider value={{ availweekly, setWeekly: setWeekly }}>
      {props.children}
    </WeeklyDealContext.Provider>
  );
}

export default WeeklyDealContextProvider;
