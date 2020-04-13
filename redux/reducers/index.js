import { combineReducers } from "redux";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer";
import profileViewReducer from "./profileViewReducer";
import productlistReducer from "./productListReducer";
import stockViewReducer from "./stockViewReducer";

const rootReducer = combineReducers({
  authReducer,
  registerReducer,
  profileViewReducer,
  productlistReducer,
  stockViewReducer,
});

export default rootReducer;

//tüm reducer'lar toplandı
