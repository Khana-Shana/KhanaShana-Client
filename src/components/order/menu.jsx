import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card.jsx";
import { Container } from "react-bootstrap";
import firebase_integration from "../fire";
import FilterResults from "react-filter-search";

const Menu = (props) => {
  let data = props.items;
  const [fooditems, setFooditems] = useState([]);
  const [value, setValue] = useState("");
  function handleChange(event) {
    const { value } = event.target;
    setValue(value);
  }

  useEffect(() => {
    firebase_integration.database.collection('Menu').onSnapshot((snapshot) => {
      var menu_items = []
      snapshot.docs.forEach(doc => {
          menu_items.push(doc.data())
      });
      setFooditems(menu_items)
    })
  }, fooditems)
  
  data = fooditems;




  return (
    <div class = "menuback">
    <div className="container-fluid">
      {console.log(props.items)}
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
                          id={item.DishID}
                          title={item.Name}
                          desc={item.PrepTime}
                          price={item.SalePrice}
                          img={item.URL}
                          items = {data}
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Menu);
