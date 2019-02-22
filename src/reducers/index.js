import { combineReducers } from "redux";
import promoCodeReducer from "./promoCodeReducers";

export default combineReducers({
  promoCode: promoCodeReducer
});


