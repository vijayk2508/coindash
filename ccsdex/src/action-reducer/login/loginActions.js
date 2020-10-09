import sendApiRequest, { cookies } from "../../services/auth";
import apiEndpoints from "../../apiEndpoints";
import loginConstants from "./loginConstants";
import { TokenID } from "../../constants";

/*
 Axios - onLogin
 Description - Makes a login network request to the server
 Endpoint - /login
 @params: email, password, onSuccess, onFailure
 @axiosParams: {
   login: {
     email,
     password
   }
 }
*/

export function onSingIn(data, onSuccess = () => {}, onFailure = () => {}) {
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: apiEndpoints.LOGIN,
      method: "post",
      data: data,
    });
    if (response.status === "success") {
      // logged in successfully
      cookies.set(TokenID, response.data.token, { path: "/" });
      onSuccess(response.data);
      dispatch(onLoginSuccess);
    } else {
      // error in logging in
      onFailure(response);
    }
  };
}

export function onLogin({ email, password }, onSuccess, onFailure) {
  return async function (dispatch) {
    const response = await sendApiRequest({
      url: apiEndpoints.LOGIN,
      method: "post",
      data: {
        userEmail: email,
        userPassword: password,
      },
    });
    if (response.status === "success") {
      // logged in successfully
      cookies.set("admin_elearning_app", response.data.token, { path: "/" });
      onSuccess();
      dispatch(onLoginSuccess);
    } else {
      // error in logging in
      onFailure(response);
    }
  };
}

/*
  Action creator
*/

function onLoginSuccess() {
  return {
    type: loginConstants.LOGIN_SUCCESSFUL,
  };
}

// function onLoginFailed() {
//   return {
//     type: loginConstants.LOGIN_SUCCESSFUL
//   };
// }
