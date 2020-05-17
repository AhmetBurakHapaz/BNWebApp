import * as actionTypes from "./actionTypes";
import postAddDevice from "../../lib/api/postAddDevice";

export const AddDeviceInformation = device => {
  return {
    type: actionTypes.ADD_DEVICE,
    payload: device
  };
};

export function addDevicePage(obj) {
  return function(dispatch) {
    postAddDevice(obj).then(res => {
      dispatch(AddDeviceInformation(res));
    });
  };
}