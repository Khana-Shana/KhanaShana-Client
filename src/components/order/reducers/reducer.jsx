import { ADD_TO_CART,REMOVE_ITEM,DEC_CART,INC_CART, FETCH_ITEMS } from '../actions/cart-action-types';
import img1 from '../images/4.jpg'
import img2 from '../images/8.jpg'
import img3 from '../images/9.jpg'
import img4 from '../images/5.png'
import img5 from '../images/1.jpg'
import img6 from '../images/7.jpg'



const initState = {
    items: [],
    cart:[],
    total: 0

}

const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        console.log(state.items)
          let fooditem = state.items.find(item=> item.DishID === action.payload)
        //   console.log(action.payload);
        //   console.log(item.DishID);
          //check if the action.payload exists in the cart
         let existed_item= state.cart.find(item=> action.payload === item.DishID)
         if(existed_item)
         {
            fooditem.quantity += 1 
             return{
                ...state,
                 total: state.total + fooditem.SalePrice 
                  }
        }
         else{
            fooditem.quantity = 1;
            //calculating the total
            let newTotal = state.total + fooditem.SalePrice 
            
            return{
                ...state,
                cart: [...state.cart, fooditem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.cart.find(item=> action.payload === item.DishID)
        let new_items = state.cart.filter(item=> action.payload !== item.DishID)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.SalePrice * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            cart: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== INC_CART){
        // console.log(action.payload)
        let fooditem = state.items.find(item=> item.DishID === action.payload)
          fooditem.quantity += 1 
          console.log(fooditem);
          let newTotal = state.total + fooditem.SalePrice
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== DEC_CART){  
        let fooditem = state.items.find(item=> item.DishID === action.payload) 
        //if the qt == 0 then it should be removed
        if(fooditem.quantity === 1){
            let new_items = state.cart.filter(item=>item.DishID !== action.payload)
            let newTotal = state.total - fooditem.SalePrice
            return{
                ...state,
                cart: new_items,
                total: newTotal
            }
        }
        else {
            fooditem.quantity -= 1
            let newTotal = state.total - fooditem.SalePrice
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    if(action.type=== FETCH_ITEMS)
    {
        return{
            ...state,
            items: action.payload
        }
    }
    
  else{
    return state
    }
    
}

export default cartReducer
