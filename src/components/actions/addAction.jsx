import {ADD_PRODUCT_BASKET} from './types';

export const addBasket = (key) => {
    return(dispatch) => {
        console.log("Adding element to cart.");
        console.log("Product: ",key);
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: key
        });
    }
}