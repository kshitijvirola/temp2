import { message } from "antd";

import * as actions from "./constant";
import { masterConst } from "modules/config";
import { axiosAuthGet, axiosAuthPost } from "modules/Axios";

export const SaveMasterType = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.SAVE_MASTER_TYPE_INITIATED });
    let response = await axiosAuthPost(masterConst.SAVE_MASTER_TYPE, payload);
    if (response.responseStatus === "1") {
      message.success(response.message);
      await dispatch({
        type: actions.SAVE_MASTER_TYPE_SUCCESS,
        payload: response,
      });
    } else dispatch({ type: actions.SAVE_MASTER_TYPE_ERROR, error: response });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({ type: actions.SAVE_MASTER_TYPE_ERROR, error: "Network Error" });
  }
};

export const getMasterType = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_MASTER_TYPE_LIST_INITIATED });
    let response = await axiosAuthGet(
      masterConst.GET_MASTER_TYPE_LIST,
      payload
    );
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_MASTER_TYPE_LIST_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_MASTER_TYPE_LIST_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_MASTER_TYPE_LIST_ERROR,
      error: "Network Error",
    });
  }
};

export const GetMasterTypeById = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_MASTER_TYPE_BY_ID_INITIATED });
    let response = await axiosAuthGet(masterConst.GET_MASTER_TYPE_BY_ID + id);
    if (response.responseStatus === "1") {
      await dispatch({
        type: actions.GET_MASTER_TYPE_BY_ID_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_MASTER_TYPE_BY_ID_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_MASTER_TYPE_BY_ID_ERROR,
      error: "Network Error",
    });
  }
};

export const deleteMasterType = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.DELETE_MASTER_TYPE_BY_ID_INITIATED });
    let response = await axiosAuthPost(
      masterConst.DELETE_MASTER_TYPE_BY_ID + id
    );
    if (response.responseStatus === "1") {
      message.success(response.message);
      await dispatch({
        type: actions.DELETE_MASTER_TYPE_BY_ID_SUCCESS,
        payload: response,
      });
    } else
      dispatch({
        type: actions.DELETE_MASTER_TYPE_BY_ID_ERROR,
        error: response,
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.DELETE_MASTER_TYPE_BY_ID_ERROR,
      error: "Network Error",
    });
  }
};

export const SaveMaster = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.SAVE_MASTER_INITIATED });
    let response = await axiosAuthPost(masterConst.SAVE_MASTER, payload);
    if (response.responseStatus === true) {
      message.success(response.message);
      await dispatch({
        type: actions.SAVE_MASTER_SUCCESS,
        payload: response,
      });
    } else dispatch({ type: actions.SAVE_MASTER_ERROR, error: response });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({ type: actions.SAVE_MASTER_ERROR, error: "Network Error" });
  }
};

export const getMaster = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_MASTER_LIST_INITIATED });
    let response = await axiosAuthGet(masterConst.GET_MASTER_LIST + id);
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_MASTER_LIST_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_MASTER_LIST_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_MASTER_LIST_ERROR,
      error: "Network Error",
    });
  }
};

export const GetMasterById = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_MASTER_BY_ID_INITIATED });
    let response = await axiosAuthGet(masterConst.GET_MASTER_BY_ID + id);
    if (response.responseStatus === "1") {
      await dispatch({
        type: actions.GET_MASTER_BY_ID_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_MASTER_BY_ID_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_MASTER_BY_ID_ERROR,
      error: "Network Error",
    });
  }
};

export const deleteMaster = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.DELETE_MASTER_BY_ID_INITIATED });
    let response = await axiosAuthPost(masterConst.DELETE_MASTER_BY_ID + id);
    if (response.responseStatus === "1") {
      message.success(response.message);
      await dispatch({
        type: actions.DELETE_MASTER_BY_ID_SUCCESS,
        payload: response,
      });
    } else
      dispatch({
        type: actions.DELETE_MASTER_BY_ID_ERROR,
        error: response,
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.DELETE_MASTER_BY_ID_ERROR,
      error: "Network Error",
    });
  }
};

export const saveKRA = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.SAVE_KRA_INITIATED });
    let response = await axiosAuthPost(masterConst.SAVE_KRA, payload);
    if (response.responseStatus === true) {
      message.success(response.message);
      await dispatch({
        type: actions.SAVE_KRA_SUCCESS,
        payload: response,
      });
    } else dispatch({ type: actions.SAVE_KRA_ERROR, error: response });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({ type: actions.SAVE_KRA_ERROR, error: "Network Error" });
  }
};

export const getKRA = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_KRA_LIST_INITIATED });
    let response = await axiosAuthGet(masterConst.GET_KRA_LIST, payload);
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_KRA_LIST_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_KRA_LIST_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_KRA_LIST_ERROR,
      error: "Network Error",
    });
  }
};

export const GetKRAById = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_KRA_BY_ID_INITIATED });
    let response = await axiosAuthGet(masterConst.GET_KRA_BY_ID + id);
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_KRA_BY_ID_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_KRA_BY_ID_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_KRA_BY_ID_ERROR,
      error: "Network Error",
    });
  }
};

export const deleteKRA = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.DELETE_KRA_BY_ID_INITIATED });
    let response = await axiosAuthPost(masterConst.DELETE_KRA_BY_ID + id);
    if (response.responseStatus === true) {
      message.success(response.message);
      await dispatch({
        type: actions.DELETE_KRA_BY_ID_SUCCESS,
        payload: response,
      });
    } else
      dispatch({
        type: actions.DELETE_KRA_BY_ID_ERROR,
        error: response,
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.DELETE_KRA_BY_ID_ERROR,
      error: "Network Error",
    });
  }
};

export const SaveKPI = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.SAVE_KPI_INITIATED });
    let response = await axiosAuthPost(masterConst.SAVE_KPI, payload);
    if (response.responseStatus === "1") {
      message.success(response.message);
      await dispatch({
        type: actions.SAVE_KPI_SUCCESS,
        payload: response,
      });
    } else dispatch({ type: actions.SAVE_KPI_ERROR, error: response });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({ type: actions.SAVE_KPI_ERROR, error: "Network Error" });
  }
};
export const uploadDoc = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.UPLOAD_DOC_INITIATED });
    let response = await axiosAuthPost(masterConst.UPLOAD_DOC, payload);
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.UPLOAD_DOC_SUCCESS,
        payload: response,
      });
    } else dispatch({ type: actions.UPLOAD_DOC_ERROR, error: response });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({ type: actions.UPLOAD_DOC_ERROR, error: "Network Error" });
  }
};
