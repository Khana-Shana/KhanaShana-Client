// import React, { Component, useState, useEffect } from "react";
// import { connect } from "react-redux";
// import Card from "./Card.jsx";
// import { Container } from "react-bootstrap";
// import firebase_integration from "../fire";
// import FilterResults from "react-filter-search";
// import { FetchItems } from "./actions/cart-actions";
// // import img1 from '../images/4.jpg'
// // import img2 from '../images/8.jpg'
// // import img3 from '../images/9.jpg'
// // import img4 from '../images/5.png'
// // import img5 from '../images/1.jpg'
// // import img6 from '../images/7.jpg'


// function Menu(props) {
//   const [data, setData] = useState([]);

//   function handleChange(event) {
//     const { value } = event.target;
//     setValue(value);
//   }

//   const [value, setValue] = useState("");

//   var menu_items = [];
//   useEffect(() => {
//     firebase_integration.database
//       .collection("Menu")
//       .get()
//       .then((docs) => {
        
//         docs.forEach((doc) => {
//           menu_items.push(doc.data());
//         });
//         // setData(menu_items)
//         // console.log(menu_items)
//         // let lol = data
//         props.FetchItems(menu_items);
//       });
//   }, menu_items);

//   console.log(data);

//   return (
//     <div class="menuback">
//       <div className="container-fluid">
//         {/* {console.log(props.items)} */}
//         <div>
//           <div class=" search active-pink-3 active-pink-4 mb-4">
//             <input
//               value={value}
//               onChange={handleChange}
//               class="form-control"
//               type="text"
//               placeholder="Search"
//               aria-label="Search"
//             />
//           </div>
//           {/* <input class = "search" type="text" value={value} onChange={handleChange} /> */}
//           <FilterResults
//             value={value}
//             data={props.items}
//             renderResults={(results) => (
//               <div class="container-fluid ml-2 mr-2">
//                 <div class="row mg">
//                   {results.map((item) => {
//                     return (
//                       <div class=" text-center col-md-3 ml-5 mr-5">
//                         <div>
//                           <Card
//                             id={item.DishID}
//                             title={item.Name}
//                             desc={item.PrepTime}
//                             price={item.SalePrice}
//                             img={item.URL}
//                           />
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     FetchItems: (items) => {
//       dispatch(FetchItems(items));
//     },
//   };
// };
// // export default connect(mapStateToProps,mapDispatchToProps)(DataRead)
// export default connect(mapStateToProps, mapDispatchToProps)(Menu);

import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card.jsx";
import { Container } from "react-bootstrap";
import firebase_integration from "../fire";
import FilterResults from "react-filter-search";
import { FetchItems } from "./actions/cart-actions";
import {Tabs, Tab} from 'react-bootstrap-tabs';
<<<<<<< HEAD

=======
import CardScreen from './CardScreen';
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
// import img1 from '../images/4.jpg'
// import img2 from '../images/8.jpg'
// import img3 from '../images/9.jpg'
// import img4 from '../images/5.png'
// import img5 from '../images/1.jpg'
// import img6 from '../images/7.jpg'


function Menu(props) {


<<<<<<< HEAD
  const [value, setValue] = useState("");

=======
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
  var menudata = [];
  useEffect(() => {
    firebase_integration.database
      .collection("Menu")
      .get()
      .then((docs) => {
        
        docs.forEach((doc) => {
          menudata.push(doc.data());
        });
        // setData(menudata)
        // console.log(menudata)
        // let lol = data
        props.FetchItems(menudata);
      });
  }, menudata);

<<<<<<< HEAD
  let filtered = props.items;


function makeAll(){
  // filtered.splice(0,filtered.length)
      filtered = props.items
 
}


function makeDesi(){
  filtered.splice(0,filtered.length)
      props.items.map((item)=>{
        if(item.Category === "Desi"){
          // console.log(item)
          filtered.push(item)
=======
  // let All = props.items;

let All = []
function makeAll(){
  // filtered.splice(0,filtered.length)
      All = props.items
 
}

let Desi = []
function makeDesi(){
  // filtered.splice(0,filtered.length)
      props.items.map((item)=>{
        if(item.Category === "Desi"){
          // console.log(item)
          Desi.push(item)
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
        }
      })

   
}

<<<<<<< HEAD
=======

let Chinese = []
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
function makeChinese(){
  // filtered.splice(0,filtered.length)
    props.items.map((item)=>{
      if(item.Category === "Chinese"){
        // console.log(item)
<<<<<<< HEAD
        filtered.push(item)
=======
        Chinese.push(item)
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
      }
    })

  
 
}

<<<<<<< HEAD
=======

let Italian = []
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
function makeItalian(){
  // filtered.splice(0,filtered.length)
    props.items.map((item)=>{
      if(item.Category === "Italian"){
        // console.log(item)
<<<<<<< HEAD
        filtered.push(item)
=======
        Italian.push(item)
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
      }
    })

 
}

<<<<<<< HEAD
=======

let Sandwich = []
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
function makeSandwich(){
  // filtered.splice(0,filtered.length)
    props.items.map((item)=>{
      if(item.Category === "Sandwich"){
        // console.log(item)
<<<<<<< HEAD
        filtered.push(item)
=======
        Sandwich.push(item)
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
      }
    })

 
}

<<<<<<< HEAD
=======

let Burger = []
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
function makeBurgers(){
  // filtered.splice(0,filtered.length)
    props.items.map((item)=>{
      if(item.Category === "Burgers"){
        // console.log(item)
<<<<<<< HEAD
        filtered.push(item)
=======
        Burger.push(item)
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
      }
    })

  
 
}

<<<<<<< HEAD
=======

let Dessert = []
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
function makeDesserts(){
  // filtered.splice(0,filtered.length)
    props.items.map((item)=>{
      if(item.Category === "Desserts"){
        // console.log(item)
<<<<<<< HEAD
        filtered.push(item)
=======
        Dessert.push(item)
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
      }
    })

 
}

<<<<<<< HEAD

function renderData(data){
  return(
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

          {console.log(data)}

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
=======
  makeAll();
  makeBurgers();
  makeDesi();
  makeDesserts();
  makeItalian();
  makeSandwich();
  makeChinese();
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff




  return (

    <div class="menuback">
      <div className="container-fluid">
        {/* {console.log(props.items)} */}
        <div>
        <div className = "tabs">

        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
<<<<<<< HEAD
    <Tab label="All"><div>
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

          {console.log(data)}

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
          </div></Tab>
    <Tab label="Desi">{renderData(filtered)}</Tab>
    <Tab label="Desserts">{makeDesserts()}</Tab>
    <Tab label="Italian">{makeItalian()}</Tab>
    <Tab label="Burgers">{makeBurgers()}</Tab>
    <Tab label="Chinese">{makeChinese()}</Tab>
    <Tab label="Sandwiches">{makeSandwich()}</Tab>
=======
    <Tab label="All"><CardScreen data = {All}/></Tab>
    <Tab label="Desi"><CardScreen data = {Desi}/></Tab>
    <Tab label="Desserts"><CardScreen data = {Dessert}/></Tab>
    <Tab label="Italian"><CardScreen data = {Italian}/></Tab>
    <Tab label="Burgers"><CardScreen data = {Burger}/></Tab>
    <Tab label="Chinese"><CardScreen data = {Chinese}/></Tab>
    <Tab label="Sandwiches"><CardScreen data = {Sandwich}/></Tab>
>>>>>>> 869488ff705c88f1dd8ab0f64b33cc368f5d9cff
</Tabs>

</div>
          
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
