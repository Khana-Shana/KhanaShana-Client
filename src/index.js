import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './components/stores/store';
import MenuContextProvider from "./components/context/menudetails"

ReactDOM.render(
  <MenuContextProvider>
  <Provider store = {store}><App /></Provider></MenuContextProvider>,
  document.getElementById('root')
);
