import {
     ADD_TO_BAG,
     CLEAR_BAG,
     REMOVE_FROM_BAG
} from "./types";

const initialState = {
     bagItems: [],
     totalPrice: 0
};

const bag = (state = initialState, action) => {
     switch (action.type) {
          case ADD_TO_BAG: {
               const selectedItemID = action.payload;
               const products = action.extra;
               let newItem;
               products.map(el => {
                    if (el.id === parseInt(selectedItemID)) newItem = el
               });
               const addToBag = [...state.bagItems, newItem];
               const newTotal = state.totalPrice + newItem.price;
               return {
                    ...state,
                    bagItems: addToBag,
                    totalPrice: newTotal
               }
          }
          case REMOVE_FROM_BAG: {
               const removedItemID = action.payload;
               const products = action.extra;
               let removedItem;
               products.map(el => {
                    if (el.id === parseInt(removedItemID)) removedItem = el;
               })
               const removeFromBag = state.bagItems.filter(el => el.id !== removedItem.id);
               const newTotal = state.totalPrice - removedItem.price;
               return {
                    ...state,
                    bagItems: removeFromBag,
                    totalPrice: newTotal
               }
          }
          case CLEAR_BAG: {
               return {
                    ...state,
                    bagItems: [],
                    totalPrice: 0
               }
          }
          default: {
               return state;
          }
     }
}

export default bag;