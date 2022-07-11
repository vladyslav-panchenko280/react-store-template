import { TOGGLE_FAV } from "./types";

const initialState = {
     favItems: []
 };
 
 const favourite = (state = initialState, action) => {
     switch (action.type) {
          case TOGGLE_FAV: {
               const favouriteID = action.payload;
               const products = action.extra;
               
               let favouriteItem;
               products.map(el => {
                    if (el.id === parseInt(favouriteID)) favouriteItem = el;
               })
               const addFav = [...state.favItems, favouriteItem];
               const removeFav = state.favItems.filter(el => el.id !== favouriteItem.id);
 
               const item = state.favItems.filter(el => el.id === parseInt(favouriteID))
               if (item.length > 0) {
                    return {
                         ...state,
                         favItems: removeFav
                    }
               } else {
                    return {
                         ...state,
                         favItems: addFav
                    }
               }
          }
      
          default: {
               return state;
          }
     }
 }
 
 export default favourite;