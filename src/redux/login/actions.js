import { push } from "connected-react-router";
import { message } from "antd";

import { axiosPost, axiosGet, axiosAuthPost } from "modules/Axios";
import { loader } from "redux/app/actions";
import { apiConstant } from "modules/config";
import * as actions from "./constant";

export const login = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.LOGIN_INITIATED });
    emptyCache();
    // let response = await axiosGet(apiConstant.AUTH_LOGIN + payload.user + "/" + payload.password);
    // if (response.responseStatus) {
      // message.success(response.message);
      let data = {
        UserName: payload.user,
        userId: 1,//response.userId,
        role: 'Admin',//response.userType,
        // orgId:response.orgId,
        prj: "apparaisal",
      };
      localStorage.setItem("auth", JSON.stringify(data));
      dispatch(push(data.role===3?"/my-profile":"/"));
      await dispatch({ type: actions.LOGIN_SUCCESS, payload: data });//response
    // } else dispatch({ type: actions.LOGIN_ERROR, error: response.message });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({ type: actions.LOGIN_ERROR, error: "Network Error" });
  }
};
export const setAuth = (payload) => (dispatch) => {
  dispatch({ type: actions.SET_AUTH, payload });
};
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: actions.LOGOUT_INITIATED });
    dispatch(loader(true));
    // let session_id = JSON.parse(localStorage.auth).sessionId;
    // let user_Id = JSON.parse(localStorage.auth).userId;
    // let token = JSON.parse(localStorage.auth).token;
    localStorage.removeItem("auth");
    dispatch({ type: actions.LOGOUT });
    dispatch(loader(false));
    emptyCache();
    // await axiosLogout(session_id + "/" + user_Id, token);
    window.location.pathname !== "/login" && dispatch(push("/login"));
  } catch (error) {
    dispatch(loader(false));
    console.log(error, "Logout Error");
  }
};
export const forgetPassword = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.FORGET_PASSWORD_INITIATED });
    let response = await axiosPost(apiConstant.FORGET_PASSWORD + payload);
    if (response.responseStatus === true) {
      message.success(response.message);
      await dispatch({type: actions.FORGET_PASSWORD_SUCCESS,payload: response});
      dispatch(push("/login"));
    } else dispatch({ type: actions.FORGET_PASSWORD_ERROR, error: response });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({ type: actions.FORGET_PASSWORD_ERROR, error: "Network Error" });
  }
};
export const getOTP = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_OTP_INITIATED });
    let response = await axiosGet(apiConstant.GET_OTP + payload);
    if (response.responseStatus === true) {
      message.success(response.message);
      await dispatch({ type: actions.GET_OTP_SUCCESS, payload: response });
    } else dispatch({ type: actions.GET_OTP_ERROR });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({ type: actions.GET_OTP_ERROR, error: "Network Error" });
  }
};
export const changePassword = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.CHANGE_PASSWORD_INITIATED });
    let response = await axiosAuthPost(apiConstant.CHANGE_PASSWORD + id);
    if (response.responseStatus === true) {
      message.success(response.message);
      await dispatch({ type: actions.CHANGE_PASSWORD_SUCCESS });
      setTimeout(() => {
        dispatch(logout());
      }, 500);
    } else dispatch({ type: actions.CHANGE_PASSWORD_ERROR });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({ type: actions.CHANGE_PASSWORD_ERROR, error: "Network Error" });
  }
};
export const emptyCache = () => {
  if ("caches" in window)
    caches.keys().then((a) => {
      a.forEach((b) => caches.delete(b));
    });
};
