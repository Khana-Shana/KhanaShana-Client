import { ADD_TO_CART,REMOVE_ITEM,DEC_CART,INC_CART } from '../actions/cart-action-types';
import img1 from '../images/4.jpg'
import img2 from '../images/8.jpg'
import img3 from '../images/9.jpg'
import img4 from '../images/5.png'
import img5 from '../images/1.jpg'
import img6 from '../images/7.jpg'



const initState = {
    items: [
        {id:1,title:'Winter body', desc: "30mins", price:110, img:img1},
        {id:2,title:'Adidas', desc: "30mins", price:80,img:img2},
        {id:3,title:'Vans', desc: "30mins",price:120,img:img3},
        {id:4,title:'White', desc: "30mins", price:260,img:img4},
        {id:5,title:'Cropped-sho', desc: "30mins", price:160,img:img5},
        {id:6,title:'Blues', desc: "30mins",price:90,img:img6}
    ],
    cart:[],
    total: 0

}

const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let fooditem = state.items.find(item=> item.id === action.payload)
          //check if the action.payload exists in the cart
         let existed_item= state.cart.find(item=> action.payload === item.id)
         if(existed_item)
         {
            fooditem.quantity += 1 
             return{
                ...state,
                 total: state.total + fooditem.price 
                  }
        }
         else{
            fooditem.quantity = 1;
            //calculating the total
            let newTotal = state.total + fooditem.price 
            
            return{
                ...state,
                cart: [...state.cart, fooditem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.cart.find(item=> action.payload === item.id)
        let new_items = state.cart.filter(item=> action.payload !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            cart: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== INC_CART){
        let fooditem = state.items.find(item=> item.id === action.payload)
          fooditem.quantity += 1 
          let newTotal = state.total + fooditem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== DEC_CART){  
        let fooditem = state.items.find(item=> item.id === action.payload) 
        //if the qt == 0 then it should be removed
        if(fooditem.quantity === 1){
            let new_items = state.cart.filter(item=>item.id !== action.payload)
            let newTotal = state.total - fooditem.price
            return{
                ...state,
                cart: new_items,
                total: newTotal
            }
        }
        else {
            fooditem.quantity -= 1
            let newTotal = state.total - fooditem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    
  else{
    return state
    }
    
}

export default cartReducer
