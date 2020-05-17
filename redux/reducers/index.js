import { combineReducers } from "redux";

import authReducer from "./authReducer";
import registerReducer from "./registerReducer";

import profileViewReducer from "./profileViewReducer";
import profileEditReducer from "./profileEditReducer";
import passwordChangeReducer from './passwordChangeReducer'
import registerControlReducer from './registerControlReducer'
import emailReducer from "./emailReducer";
import lostPasswordReducer from "./lostPasswordReducer";
import passwordResetReducer from "./passwordResetReducer";

import productlistReducer from "./productListReducer";
import productAddReducer from "./productAddReducer"
import productRemoveReducer from './productRemoveReducer'
import productEditReducer from './productEditReducer'
import productCountReducer from "./productCountReducer";

import stockViewReducer from "./stockViewReducer";
import addDeviceReducer from './addDeviceReducer'
import stockRemoveReducer from './stockRemoveReducer'
import stockEditReducer from './stockEditReducer'
import myOrdersReducer from "./myOrdersReducer"

import cartReducer from "./cartReducer";
import shoppingReducer from './shoppingReducer'

import notificationToCommunityReducer from './notificationToCommunityReducer'
import notificationToEveryoneReducer from './notificationToEveryoneReducer'
import notificationToPersonReducer from './notificationToPersonReducer'
import notificationIdListReducer from "./notificationIdListReducer"
import notificationViewReducer from "./notificationViewReducer";

import countryReducer from "./countryReducer"
import contactFormReducer from "./contactFormReducer";



const rootReducer = combineReducers({
  authReducer,
  registerReducer,
  profileViewReducer,
  profileEditReducer,
  productlistReducer,
  stockViewReducer,
  productAddReducer,
  cartReducer,
  passwordChangeReducer,
  shoppingReducer,
  addDeviceReducer,
  registerControlReducer,
  productRemoveReducer,
  stockRemoveReducer,
  notificationToCommunityReducer,
  notificationToEveryoneReducer,
  notificationToPersonReducer,
  notificationIdListReducer,
  productEditReducer,
  stockEditReducer,
  countryReducer,
  productCountReducer,
  contactFormReducer,
  emailReducer,
  lostPasswordReducer,
  notificationViewReducer,
  passwordResetReducer,
  myOrdersReducer,
});

export default rootReducer;

//tüm reducer'lar toplandı
