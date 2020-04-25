import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
// import rootReducer from './components/reducers/rootReducer';
import {Provider} from 'react-redux';

// const store = createStore(rootReducer);

ReactDOM.render(
 <App/>,
  document.getElementById('root')
);

