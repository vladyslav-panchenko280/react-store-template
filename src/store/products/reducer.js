import { 
     LOADED_PRODUCTS,
     START_FETCH_PRODUCTS,
     ERROR_LOADED_PRODUCTS 
} from "./types";

const initialState = {
    products: [],
    isLoading: false,
    hasError: false,
};

const products = (state = initialState, action) => {
    switch (action.type) {
         case START_FETCH_PRODUCTS: {
              return {
                   ...state,
                   isLoading: true
              }
         }
         case LOADED_PRODUCTS: {
              return {
                   ...state,
                   products: action.payload.products,
                   isLoading: false,
                   hasError: false
              }
         }
         case ERROR_LOADED_PRODUCTS: {
              return {
                   ...state,
                   isLoading: false,
                   hasError: true
              }
         }
         default: {
              return state;
         }
    }
}

export default products;