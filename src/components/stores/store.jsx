/* creating store for cart reducer to maintain cart globally */
import { createStore } from 'redux';
import cartReducer from '../order/reducers/reducer'

const store = createStore(cartReducer);

export default store;