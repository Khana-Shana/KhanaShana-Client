import React, { useState } from "react";
import FilterResults from "react-filter-search";
import Card from "./Card.jsx";

function CardScreen(props) {
  const [data, setData] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setValue(value);
  }

  const [value, setValue] = useState("");
  return (
    <div>
      <div class=" search active-pink-3 active-pink-4 mb-4">
        <input
          value={value}
          onChange={handleChange}
          class="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>

      <FilterResults
        /* Implementation of the search bar to cater to each card's name. */
        value={value}
        data={props.data}
        renderResults={(results) => (
          <div class="container-fluid">
            <div style={{ paddingLeft: "1%" }} class="row mg">
              {results.map((item) => {
                return (
                  <div class=" text-center col-md-3 ml-5 mr-1">
                    <div>
                      <Card
                        /* Applying map on the cards fetched from the backend and storing 
                           details of all cards in the variables below for the purpose of
                           displaying on the menu screen. */
                        id={item.DishID}
                        title={item.Name}
                        desc={item.PrepTime}
                        price={item.SalePrice}
                        img={item.URL}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default CardScreen;
