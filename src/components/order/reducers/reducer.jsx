import {
  /* importing action types from the actions folder. */
  ADD_TO_CART,
  REMOVE_ITEM,
  DEC_CART,
  INC_CART,
  FETCH_ITEMS,
  FETCH_CART,
  FETCH_TOTAL,
} from "../actions/cart-action-types";

/* initial state for cart reducer */

const initState = {
  items: [],
  cart: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let fooditem = state.items.find((item) => item.DishID === action.payload);
    /* check if the item exists in the cart. */
    let existed_item = state.cart.find(
      (item) => action.payload === item.DishID
    );
    /* if item already exists increment quantity and calculate new total */
    if (existed_item) {
      fooditem.quantity += 1;
      existed_item.quantity = fooditem.quantity;
      let newTotal = state.total + existed_item.SalePrice;
      /* setting the cart for local storage. */
      localStorage.setItem("cart", JSON.stringify(state.cart));
      /* setting the menu for local storage. */
      localStorage.setItem("menu", JSON.stringify(state.items));
      /* setting the cart total for local storage. */
      localStorage.setItem("total", newTotal);
      /* return state of reducer along with updated total */
      return {
        ...state,
        total: newTotal,
      };
          /* if item doesn't exist, set quantity to zero, update cart and calculate new total */
    } else {
      fooditem.quantity = 1;
      /* Updating the total based on the additional quantity */
      let newTotal = state.total + fooditem.SalePrice;
      const cartitems = [...state.cart, fooditem];
      localStorage.setItem("cart", JSON.stringify(cartitems));
      localStorage.setItem("menu", JSON.stringify(state.items));
      localStorage.setItem("total", newTotal);
       /* return state of reducer along with updated cart and updated total */
      return {
        ...state,
        cart: cartitems,
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    /* find item in cart and filter cart */
    let itemToRemove = state.cart.find(
      (item) => action.payload === item.DishID
    );
    let new_items = state.cart.filter((item) => action.payload !== item.DishID);
    /* Updating the total based on the decreased quantity of particular items. */
    let newTotal = state.total - itemToRemove.SalePrice * itemToRemove.quantity;
    localStorage.setItem("cart", JSON.stringify(new_items));
    localStorage.setItem("menu", JSON.stringify(state.items));
    localStorage.setItem("total", newTotal);
     /* return state of reducer along with updated cart and updated total */
    return {
      ...state,
      cart: new_items,
      total: newTotal,
    };
  }

  if (action.type === INC_CART) {
    localStorage.setItem("menu", JSON.stringify(state.items));
    /* find item in cart and update quantity*/
    let existed_item = state.cart.find(
      (item) => action.payload === item.DishID
    );
    existed_item.quantity += 1;
    let newTotal = state.total + existed_item.SalePrice;
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("total", newTotal);
    /* return state of reducer along with updated cart and updated total */
    return {
      ...state,
      cart: state.cart,
      total: newTotal,
    };
  }
  if (action.type === DEC_CART) {
    let fooditem = state.cart.find((item) => item.DishID === action.payload);
    /* if the quantity === 0 then it should be removed */
    if (fooditem.quantity === 1) {
      let new_items = state.cart.filter(
        (item) => item.DishID !== action.payload
      );
      let newTotal = state.total - fooditem.SalePrice;
      localStorage.setItem("menu", JSON.stringify(state.items));
      localStorage.setItem("cart", JSON.stringify(new_items));
      localStorage.setItem("total", newTotal);
      /* return state of reducer along with updated cart and updated total */
      return {
        ...state,
        cart: new_items,
        total: newTotal,
      };
    }
    /* if quantity more than one, decrement it and udpate cart */ 
    else {
      fooditem.quantity -= 1;
      let newTotal = state.total - fooditem.SalePrice;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("menu", JSON.stringify(state.items));
      localStorage.setItem("total", newTotal);
      /* return state of reducer along updated total */
      return {
        ...state,
        total: newTotal,
      };
    }
  }
  if (action.type === FETCH_ITEMS) {
    /* Fetching all the items for the menu and updating items*/
    return {
      ...state,
      items: action.payload,
    };
  }
  if (action.type === FETCH_CART) {
    /* Fetching all the items specific to the cart from local storage and updating reducer */
    return {
      ...state,
      cart: action.payload,
    };
  }
  if (action.type === FETCH_TOTAL) {
    /* Fetching the cumulative total of all items for the cart from local storage and updating reducer*/
    return {
      ...state,
      total: action.payload,
    };
  } else {
    return state;
  }
};

export default cartReducer;
