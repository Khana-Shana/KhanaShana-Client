import { ADD_TO_CART,REMOVE_ITEM,DEC_CART,INC_CART, FETCH_ITEMS, FETCH_CART, FETCH_TOTAL} from './cart-action-types'

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        payload: id,
    }
}

export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        payload:id
    }
}

export const subtractQuantity=(id)=>{
    return{
        type: DEC_CART,
        payload:id
    }
}

export const addQuantity=(id)=>{
    return{
        type: INC_CART,
        payload:id
    }
}

export const FetchItems=(items)=>{
    return{
        type: FETCH_ITEMS,
        payload:items
    }
}

export const FetchCart=(items)=>{
    return{
        type: FETCH_CART,
        payload:items
    }
}

export const FetchTotal=(total)=>{
    return{
        type: FETCH_TOTAL,
        payload:total
    }
}

