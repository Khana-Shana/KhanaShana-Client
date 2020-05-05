import {INCREASE_QUANTITY,DECREASE_QUANTITY,CLEAR_PRODUCT} from './types';


export const productQuantity = (action,key) => {
    return(dispatch) => {
        dispatch({
            type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: key
        })
    }
}

export const clearProducts = (key) => {
    return(dispatch) => {
        dispatch({
            type: CLEAR_PRODUCT,
            payload: key
        })
    }
}