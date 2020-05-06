import React, { useState } from "react";
import WeeklyDealContext from "./weeklydealcontext";

/* weekly deal context provider using daily deal global state */
function WeeklyDealContextProvider(props) {
  const [availweekly, setweeklydeal] = useState(null);

  const setWeekly = (value) => {
    // localStorage.setItem("weeklydeal",JSON.stringify(value))
    setweeklydeal(value);
  };

/*returning weekly deal context provider with deal state and setter function to child components */
  return (
    <WeeklyDealContext.Provider value={{ availweekly, setWeekly: setWeekly }}>
      {props.children}
    </WeeklyDealContext.Provider>
  );
}

export default WeeklyDealContextProvider;
