import * as actionTypes from "./actionTypes";
import postContactForm from "../../lib/api/postContactForm.js";

export const contactForm = contact => {
  return {
    type: actionTypes.CONTACT_FORM,
    payload: contact
  };
};

export function contactFormPage(obj) {
  return function(dispatch) {
    postContactForm(obj).then(res => {
      dispatch(contactForm(res));
      
    });
  };
}