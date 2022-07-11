import * as actions from "./constant";
const initialState = {
  error: false,
  loading: false,
  message: false,
  isSaved: false,
  isDeleted: false,
  organizationList: {},
  organization: [],
  userList: [],
  settingsDetails: {},
  yearDetails: [],
  periodList: [],
  periodDetails:{},
  yearReview:[]
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_ORGANIZATION_INITIATED:
      return {
        ...state,
        error: false,
        isSaved: false,
        message: false,
        loading: true,
      };
    case actions.SAVE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        isSaved: true,
      };
    case actions.SAVE_ORGANIZATION_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        isSaved: false,
        message: action.error,
      };
    case actions.GET_ORGANIZATION_LIST_INITIATED:
      return {
        ...state,
        error: false,
        message: false,
        loading: true,
      };
    case actions.GET_ORGANIZATION_LIST_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        organization: action.payload.data,
      };
    case actions.GET_ORGANIZATION_LIST_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      };
    case actions.GET_ORGANIZATION_BY_ID_INITIATED:
      return {
        ...state,
        error: false,
        message: false,
        loading: true,
      };
    case actions.GET_ORGANIZATION_BY_ID_SUCCESS:
      return {
        ...state,
        error: false,
        message: false,
        loading: false,
        organizationList: action.payload.data,
      };
    case actions.GET_ORGANIZATION_BY_ID_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      };
    case actions.DELETE_ORGANIZATION_INITIATED:
      return {
        ...state,
        error: false,
        message: false,
        isDeleted: false,
        loading: true,
      };
    case actions.DELETE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        isDeleted: true,
      };
    case actions.DELETE_ORGANIZATION_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        isDeleted: false,
        message: action.error,
      };
    case actions.GET_USERLISt_BYORGID_INITIATED:
      return {
        ...state,
        error: false,
        message: false,
        loading: true,
      };
    case actions.GET_USERLISt_BYORGID_SUCCESS:
      return {
        ...state,
        error: false,
        message: false,
        loading: false,
        userList: action.payload.data,
      };
    case actions.GET_USERLISt_BYORGID_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      };
    case actions.SAVE_SETTINGS_INITIATED:
      return {
        ...state,
        error: false,
        isSaved: false,
        message: false,
        loading: true,
      };
    case actions.SAVE_SETTINGS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        isSaved: true,
      };
    case actions.SAVE_SETTINGS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        isSaved: false,
        message: action.error,
      };
    case actions.GET_SETTINGS_INITIATED:
      return {
        ...state,
        error: false,
        message: false,
        loading: true,
      };
    case actions.GET_SETTINGS_SUCCESS:
      return {
        ...state,
        error: false,
        message: false,
        loading: false,
        settingsDetails:
          action.payload.data === null
            ? { alredy: false }
            : action.payload.data,
      };
    case actions.GET_SETTINGS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      };
    case actions.GET_YEAR_INITIATED:
      return {
        ...state,
        error: false,
        message: false,
        loading: true,
      };
    case actions.GET_YEAR_SUCCESS:
      return {
        ...state,
        error: false,
        message: false,
        loading: false,
        yearDetails: action.payload.data,
      };
    case actions.GET_YEAR_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      };
    case actions.SAVE_PERIOD_INITIATED:
      return {
        ...state,
        error: false,
        isSaved: false,
        message: false,
        loading: true,
      };
    case actions.SAVE_PERIOD_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        isSaved: true,
      };
    case actions.SAVE_PERIOD_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        isSaved: false,
        message: action.error,
      };
    case actions.GET_PERIOD_INITIATED:
      return {
        ...state,
        error: false,
        message: false,
        loading: true,
      };
    case actions.GET_PERIOD_SUCCESS:
      return {
        ...state,
        error: false,
        message: false,
        loading: false,
        periodList: action.payload.data,
      };
    case actions.GET_PERIOD_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      };
    case actions.GET_PERIOD_BYID_INITIATED:
      return {
        ...state,
        error: false,
        message: false,
        loading: true,
      };
    case actions.GET_PERIOD_BYID_SUCCESS:
      return {
        ...state,
        error: false,
        message: false,
        loading: false,
        periodDetails: action.payload.data,
      };
    case actions.GET_PERIOD_BYID_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      };
      case actions.GET_YEAR_REVIEW_INITIATED:
        return {
          ...state,
          error: false,
          message: false,
          loading: true,
        };
      case actions.GET_YEAR_REVIEW_SUCCESS:
        return {
          ...state,
          error: false,
          message: false,
          loading: false,
          yearReview: action.payload.data,
        };
      case actions.GET_YEAR_REVIEW_ERROR:
        return {
          ...state,
          error: true,
          loading: false,
          message: action.error,
        };
    default:
      return state;
  }
};
