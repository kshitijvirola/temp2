import * as actions from "./constant";
const initialState = {
  error: false,
  loading: false,
  message: false,
  isChanged: false,
  isAuthenticated: false,
  redirectProfile: false,
  userId: 0,
  OTP:""
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_INITIATED:
      return {
        ...state,
        isAuthenticated: false,
        message: false,
        error: false,
        loading: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        isAuthenticated: true,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        isAuthenticated: false,
        message: action.error,
      };
    case actions.SET_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload,
      };
    case actions.LOGOUT_INITIATED:
      return {
        ...state,
        message: false,
        error: false,
        loading: true,
      };
    case actions.LOGOUT:
      return {
        ...state,
        error: false,
        isAuthenticated: false,
        session_id: null,
        loading: false,
        redirectProfile: false,
        message: false,
      };
    case actions.LOGOUT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        redirectProfile: false,
        message: false,
      };
    case actions.FORGET_PASSWORD_INITIATED:
      return {
        ...state,
        message: false,
        error: false,
        loading: true,
      };
    case actions.FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case actions.FORGET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.error,
      };
    case actions.CHANGE_PASSWORD_INITIATED:
      return {
        ...state,
        isChanged: false,
        loading: true,
        error: false,
      };
    case actions.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isChanged: true,
        loading: false,
        error: false,
      };
    case actions.CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        isChanged: false,
      };
      case actions.GET_OTP_INITIATED:
        return {
          ...state,
          OTP:"",
          loading: true,
          error: false,
        };
      case actions.GET_OTP_SUCCESS:
        return {
          ...state,
          OTP:action.payload.data,
          loading: false,
          error: false,
        };
      case actions.GET_OTP_ERROR:
        return {
          ...state,
          error: true,
          loading: false,
          OTP:"",
        };
    default:
      return state;
  }
};
