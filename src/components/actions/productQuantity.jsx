import {INCREASE_QUANTITY,DECREASE_QUANTITY,CLEAR_PRODUCT} from './types';


export const productQuantity = (action,key) => {
    return(dispatch) => {
        console.log("Inside product Quantity");
        console.log("The action is:",action);
        console.log("The key is:",key);

        dispatch({
            type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: key
        })
    }
}

export const clearProducts = (key) => {
    return(dispatch) => {
        console.log("Inside clear Products");
        console.log("The key is:",key);

        dispatch({
            type: CLEAR_PRODUCT,
            payload: key
        })
    }
}