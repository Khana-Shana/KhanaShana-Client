import { createStore } from 'redux';
import cartReducer from '../order/reducers/reducer'

const store = createStore(cartReducer);

export default store;