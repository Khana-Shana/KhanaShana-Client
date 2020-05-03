import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card.jsx";
import { Container } from "react-bootstrap";
import firebase_integration from "../fire";
import FilterResults from "react-filter-search";
import { FetchItems } from "./actions/cart-actions";
// import img1 from '../images/4.jpg'
// import img2 from '../images/8.jpg'
// import img3 from '../images/9.jpg'
// import img4 from '../images/5.png'
// import img5 from '../images/1.jpg'
// import img6 from '../images/7.jpg'


function Menu(props) {
  const [data, setData] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setValue(value);
  }

  const [value, setValue] = useState("");

  var menu_items = [];
  useEffect(() => {
    firebase_integration.database
      .collection("Menu")
      .get()
      .then((docs) => {
        
        docs.forEach((doc) => {
          menu_items.push(doc.data());
        });
        // setData(menu_items)
        // console.log(menu_items)
        // let lol = data
        props.FetchItems(menu_items);
      });
  }, menu_items);

  console.log(data);

  return (
    <div class="menuback">
      <div className="container-fluid">
        {/* {console.log(props.items)} */}
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
          {/* <input class = "search" type="text" value={value} onChange={handleChange} /> */}
          <FilterResults
            value={value}
            data={props.items}
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
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FetchItems: (items) => {
      dispatch(FetchItems(items));
    },
  };
};
// export default connect(mapStateToProps,mapDispatchToProps)(DataRead)
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
