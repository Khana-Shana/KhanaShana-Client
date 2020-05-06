import React, { useState } from "react";
import DailyDealContext from "./dailydealcontext";

/* daily deal context provider using daily deal global state */

function DailyDealContextProvider(props) {
  const [availdaily, setdailydeal] = useState(null);

  const setDaily = (value) => {
    setdailydeal(value);
  };

 /*returning daily deal context provider with deal state and setter function to child components */
  return (
    <DailyDealContext.Provider value={{ availdaily, setDaily: setdailydeal }}>
      {props.children}
    </DailyDealContext.Provider>
  );
}

export default DailyDealContextProvider;