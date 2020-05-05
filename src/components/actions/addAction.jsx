import {ADD_PRODUCT_BASKET} from './types';

export const addBasket = (key) => {
    return(dispatch) => {
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: key
        });
    }
}