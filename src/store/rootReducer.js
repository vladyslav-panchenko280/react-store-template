import { combineReducers } from "redux";
import products from './products/reducer';
import modal from './modal/reducer';
import favourite from "./favourite/reducer";
import bag from './bag/reducer'
import authentication from "./authentication/reducer";

const rootReducer = combineReducers({
     products,
     modal,
     favourite,
     bag,
     authentication
})

export default rootReducer;