import getData from "../../api/getData";
import {
     START_FETCH_PRODUCTS,
     LOADED_PRODUCTS,
     ERROR_LOADED_PRODUCTS
} from "./types";

export const fetchProducts = () => dispatch => {
     dispatch({
          type: START_FETCH_PRODUCTS
     })
     getData('../../OnlineStore/data/products/products.json')
          .then(products => {
               const action = loadedProducts(products);
               dispatch(action)
          })
          .catch(e => {
               console.log(e)
               dispatch(errorLoadedProducts())
          })
}

export function loadedProducts(products) {
     return {
          type: LOADED_PRODUCTS,
          payload: { products: products }
     }
}

export function errorLoadedProducts() {
     return {
          type: ERROR_LOADED_PRODUCTS
     }
}