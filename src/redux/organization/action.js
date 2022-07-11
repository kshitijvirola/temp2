import { message } from "antd";
import { push } from "connected-react-router";
import * as actions from "./constant";
import { organizationConst } from "modules/config";
import { axiosAuthGet, axiosAuthPost } from "modules/Axios";

export const SaveOrganization = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.SAVE_ORGANIZATION_INITIATED });
    let response = await axiosAuthPost(
      organizationConst.SAVE_ORGANIZATION,
      payload
    );
    if (response.responseStatus === "1") {
      message.success(response.message);
      await dispatch({
        type: actions.SAVE_ORGANIZATION_SUCCESS,
        payload: response,
      });
    } else dispatch({ type: actions.SAVE_ORGANIZATION_ERROR, error: response });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({ type: actions.SAVE_ORGANIZATION_ERROR, error: "Network Error" });
  }
};

export const getOrganizationList = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_ORGANIZATION_LIST_INITIATED });
    let response = await axiosAuthGet(
      organizationConst.GET_ORGANIZATION_LIST,
      payload
    );
    if (response.responseStatus === "1") {
      await dispatch({
        type: actions.GET_ORGANIZATION_LIST_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_ORGANIZATION_LIST_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_ORGANIZATION_LIST_ERROR,
      error: "Network Error",
    });
  }
};

export const GetOrganizationById = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_ORGANIZATION_BY_ID_INITIATED });
    let response = await axiosAuthGet(
      organizationConst.GET_ORGANIZATION_BY_ID + id
    );
    if (response.responseStatus === "1") {
      await dispatch({
        type: actions.GET_ORGANIZATION_BY_ID_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_ORGANIZATION_BY_ID_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_ORGANIZATION_BY_ID_ERROR,
      error: "Network Error",
    });
  }
};

export const deleteOrganization = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.DELETE_ORGANIZATION_INITIATED });
    let response = await axiosAuthPost(
      organizationConst.DELETE_ORGANIZATION_BY_ID + id
    );
    if (response.responseStatus === "1") {
      message.success(response.message);
      await dispatch({
        type: actions.DELETE_ORGANIZATION_SUCCESS,
        payload: response,
      });
    } else
      dispatch({
        type: actions.DELETE_ORGANIZATION_ERROR,
        error: response,
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.DELETE_ORGANIZATION_ERROR,
      error: "Network Error",
    });
  }
};

export const getUserListByOrgId = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_USERLISt_BYORGID_INITIATED });
    let response = await axiosAuthGet(
      organizationConst.GET_USERLISt_BYORGID + id
    );
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_USERLISt_BYORGID_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_USERLISt_BYORGID_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_USERLISt_BYORGID_ERROR,
      error: "Network Error",
    });
  }
};
export const saveSettings = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.SAVE_SETTINGS_INITIATED });
    let response = await axiosAuthPost(
      organizationConst.SAVE_SETTINGS,
      payload
    );
    if (response.responseStatus === true) {
      message.success(response.message);
      await dispatch({
        type: actions.SAVE_SETTINGS_SUCCESS,
        payload: response,
      });
      dispatch(push("/home"));
    } else
      dispatch({
        type: actions.SAVE_SETTINGS_ERROR,
        error: response,
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.SAVE_SETTINGS_ERROR,
      error: "Network Error",
    });
  }
};
export const getSettings = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_SETTINGS_INITIATED });
    let response = await axiosAuthGet(organizationConst.GET_SETTINGS + id);
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_SETTINGS_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_SETTINGS_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_SETTINGS_ERROR,
      error: "Network Error",
    });
  }
};
export const getYear = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_YEAR_INITIATED });
    let response = await axiosAuthGet(organizationConst.GET_YEAR + id);
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_YEAR_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_YEAR_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_YEAR_ERROR,
      error: "Network Error",
    });
  }
};
export const savePeriod = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.SAVE_PERIOD_INITIATED });
    let response = await axiosAuthPost(organizationConst.SAVE_PERIOD, payload);
    if (response.responseStatus === true) {
      message.success(response.message);
      await dispatch({
        type: actions.SAVE_PERIOD_SUCCESS,
        payload: response,
      });
    } else
      dispatch({
        type: actions.SAVE_PERIOD_ERROR,
        error: response,
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.SAVE_PERIOD_ERROR,
      error: "Network Error",
    });
  }
};
export const getPeriod = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_PERIOD_INITIATED });
    let response = await axiosAuthGet(organizationConst.GET_PERIOD + id);
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_PERIOD_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_PERIOD_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_PERIOD_ERROR,
      error: "Network Error",
    });
  }
};
export const getPeriodById = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_PERIOD_BYID_INITIATED });
    let response = await axiosAuthGet(organizationConst.GET_PERIOD_BYID + id);
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_PERIOD_BYID_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_PERIOD_BYID_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_PERIOD_BYID_ERROR,
      error: "Network Error",
    });
  }
};
export const getYearReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_YEAR_REVIEW_INITIATED });
    let response = await axiosAuthGet(organizationConst.GET_YEAR_REVIEW + id);
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_YEAR_REVIEW_SUCCESS,
        payload: response,
      });
    } else dispatch({ type: actions.GET_YEAR_REVIEW_ERROR, error: response });
  } catch (error) {
    console.log(error);
    dispatch({ type: actions.GET_YEAR_REVIEW_ERROR, error: "Network Error" });
  }
};
