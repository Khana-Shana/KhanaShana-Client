import React, { Component, useState } from "react";
import { connect } from "react-redux";
import Card from "./Card.jsx";
import { Container } from "react-bootstrap";
import firebase_integration from "../fire";
import FilterResults from "react-filter-search";

const Menu = (props) => {
  let data = props.items;
  const [fooditems, setFooditems] = useState(data);
  const [value, setValue] = useState("");
  function handleChange(event) {
    const { value } = event.target;
    setValue(value);
  }
  return (
    <div className="container-fluid">
      <div className="menuuu">MENU</div>
      <div>
          
      <div class=" search active-pink-3 active-pink-4 mb-4">
  <input value={value} onChange={handleChange}  class="form-control" type="text" placeholder="Search" aria-label="Search"/>
</div>
        {/* <input class = "search" type="text" value={value} onChange={handleChange} /> */}
        <FilterResults
          value={value}
          data={data}
          renderResults={(results) => (
            <div class="container-fluid ml-2 mr-2">
              <div class="row mg">
                {results.map((item) => {
                  return (
                    <div class=" text-center col-md-3 ml-5 mr-5">
                      <div>
                        <Card
                          id={item.id}
                          title={item.title}
                          desc={item.desc}
                          price={item.price}
                          img={item.img}
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Menu);
