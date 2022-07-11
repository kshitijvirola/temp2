import { message } from "antd";
import { push } from "connected-react-router";

import * as actions from "./constant";
import { employeeConst } from "modules/config";
import { axiosAuthGet, axiosAuthPost } from "modules/Axios";

export const saveEmployee = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.SAVE_EMPLOYEE_INITIATED });
    let response = await axiosAuthPost(employeeConst.SAVE_EMPLOYEE, payload);
    if (response.responseStatus === true) {
        message.success(response.message);
        let data = {
            empId:response.data
        }
        localStorage.setItem("employeeId", JSON.stringify(data));
      await dispatch({
        type: actions.SAVE_EMPLOYEE_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.SAVE_EMPLOYEE_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.SAVE_EMPLOYEE_ERROR,
      error: "Network Error",
    });
  }
};
export const getEmployee = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_EMPLOYEE_LIST_INITIATED });
    let response = await axiosAuthPost(
      employeeConst.GET_EMPLOYEE_LIST,
      payload
    );
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_EMPLOYEE_LIST_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_EMPLOYEE_LIST_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_EMPLOYEE_LIST_ERROR,
      error: "Network Error",
    });
  }
};
export const getEmployeeByID = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_EMPLOYEE_BYID_INITIATED });
    let response = await axiosAuthGet(
      employeeConst.GET_EMPLOYEE_BYID + id);
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_EMPLOYEE_BYID_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_EMPLOYEE_BYID_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_EMPLOYEE_BYID_ERROR,
      error: "Network Error",
    });
  }
};
export const deleteEmployee = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.DELET_EMPLOYEE_INITIATED });
    let response = await axiosAuthPost(
      employeeConst.DELET_EMPLOYEE+id
    );
    if (response.responseStatus === true) {
      await dispatch({
        type: actions.DELET_EMPLOYEE_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.DELET_EMPLOYEE_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.DELET_EMPLOYEE_ERROR,
      error: "Network Error",
    });
  }
};
export const saveAppraiser = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.SAVE_APPRAISER_INITIATED });
    let response = await axiosAuthPost(
      employeeConst.SAVE_APPRAISER,payload
    );
    if (response.responseStatus === true) {
      message.success(response.message);
      await dispatch({
        type: actions.SAVE_APPRAISER_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.SAVE_APPRAISER_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.SAVE_APPRAISER_ERROR,
      error: "Network Error",
    });
  }
};
export const getAppraiser = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_APPRAISER_INITIATED });
    let response = await axiosAuthGet(
      employeeConst.GET_APPRAISER + id
      );
      if (response.responseStatus === true) {
      await dispatch({
        type: actions.GET_APPRAISER_SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actions.GET_APPRAISER_ERROR,
        error: response,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actions.GET_APPRAISER_ERROR,
      error: "Network Error",
    });
  }
};
export const saveWeightage = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.SAVE_WEIGHTAGE_INITIATED });
    let response = await axiosAuthPost(
      employeeConst.SAVE_WEIGHTAGE,payload
      );
      if (response.responseStatus === true) {
        message.success(response.message);
        await dispatch({
          type: actions.SAVE_WEIGHTAGE_SUCCESS,
          payload: response,
        });
        dispatch(push("/employee"));
      } else {
        dispatch({
          type: actions.SAVE_WEIGHTAGE_ERROR,
          error: response,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: actions.SAVE_WEIGHTAGE_ERROR,
        error: "Network Error",
      });
    }
  };
  export const getWeightage = (id) => async (dispatch) => {
    try {
      dispatch({ type: actions.GET_WEIGHTAGE_INITIATED });
      let response = await axiosAuthGet(
        employeeConst.GET_WEIGHTAGE + id
        );
        if (response.responseStatus === true) {
        await dispatch({
          type: actions.GET_WEIGHTAGE_SUCCESS,
          payload: response,
        });
      } else {
        dispatch({
          type: actions.GET_WEIGHTAGE_ERROR,
          error: response,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: actions.GET_WEIGHTAGE_ERROR,
        error: "Network Error",
      });
    }
  };
  export const getEmpAppbyId = (id) => async (dispatch) => {
    try {
      dispatch({ type: actions.GET_EMPAPP_BYID_INITIATED });
      let response = await axiosAuthGet(
        employeeConst.GET_EMPAPP_BYID + id
        );
        if (response.responseStatus === true) {
        await dispatch({
          type: actions.GET_EMPAPP_BYID_SUCCESS,
          payload: response,
        });
      } else {
        dispatch({
          type: actions.GET_EMPAPP_BYID_ERROR,
          error: response,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: actions.GET_EMPAPP_BYID_ERROR,
        error: "Network Error",
      });
    }
  };
  export const getKraByEmpId = (id) => async (dispatch) => {
    try {
      dispatch({ type: actions.GET_KRABY_EMPID_INITIATED });
      let response = await axiosAuthGet(
        employeeConst.GET_KRABY_EMPID + id
        );
        if (response.responseStatus === true) {
        await dispatch({
          type: actions.GET_KRABY_EMPID_SUCCESS,
          payload: response,
        });
      } else {
        dispatch({
          type: actions.GET_KRABY_EMPID_ERROR,
          error: response,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: actions.GET_KRABY_EMPID_ERROR,
        error: "Network Error",
      });
    }
  };
  export const saveAppraisal = (payload) => async (dispatch) => {
    try {
      dispatch({ type: actions.SAVE_APPRAISAL_INITIATED });
      let response = await axiosAuthPost(
        employeeConst.SAVE_APPRAISAL,payload
        );
        if (response.responseStatus === true) {
          message.success(response.message);
          await dispatch({
            type: actions.SAVE_APPRAISAL_SUCCESS,
            payload: response,
          });
          dispatch(push("/appraisal"));
        } else {
          dispatch({
            type: actions.SAVE_APPRAISAL_ERROR,
            error: response,
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: actions.SAVE_APPRAISAL_ERROR,
          error: "Network Error",
        });
      }
    };
  
  