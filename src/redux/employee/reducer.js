import * as actions from "./constant";
const initialState = {
  error: false,
  loading: false,
  message: false,
  isAdded: false,
  isDeleted: false,
  empTotalrec: 0,
  employeeList: [],
  employeeDetails: {},
  appraiserDetail: [],
  weightageData: [],
  empAppData:[],
  kraByEmpId:[],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_EMPLOYEE_INITIATED:
      return {
        ...state,
        error: false,
        isAdded: false,
        message: false,
        loading: true,
      };
    case actions.SAVE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        isAdded: true,
      };
    case actions.SAVE_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        isAdded: false,
        message: action.error,
      };
    case actions.GET_EMPLOYEE_LIST_INITIATED:
      return {
        ...state,
        error: false,
        message: false,
        loading: true,
      };
    case actions.GET_EMPLOYEE_LIST_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        employeeList: action.payload.data.data,
        empTotalrec: action.payload.data.totalrecord,
      };
    case actions.GET_EMPLOYEE_LIST_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      };
    case actions.GET_EMPLOYEE_BYID_INITIATED:
      return {
        ...state,
        error: false,
        message: false,
        loading: true,
      };
    case actions.GET_EMPLOYEE_BYID_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        employeeDetails: action.payload.data,
      };
    case actions.GET_EMPLOYEE_BYID_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      };
    case actions.DELET_EMPLOYEE_INITIATED:
      return {
        ...state,
        error: false,
        isDeleted: false,
        message: false,
        loading: true,
      };
    case actions.DELET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        isDeleted: true,
      };
    case actions.DELET_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        isDeleted: false,
        message: action.error,
      };
    case actions.SAVE_APPRAISER_INITIATED:
      return {
        ...state,
        error: false,
        isAdded: false,
        message: false,
        loading: true,
      };
    case actions.SAVE_APPRAISER_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        isAdded: true,
      };
    case actions.SAVE_APPRAISER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        isAdded: false,
        message: action.error,
      };
    case actions.GET_APPRAISER_INITIATED:
      return {
        ...state,
        error: false,
        message: false,
        loading: true,
      };
    case actions.GET_APPRAISER_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        appraiserDetail: action.payload.data,
      };
    case actions.GET_APPRAISER_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      };
    case actions.SAVE_WEIGHTAGE_INITIATED:
      return {
        ...state,
        error: false,
        isAdded: false,
        message: false,
        loading: true,
      };
    case actions.SAVE_WEIGHTAGE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        isAdded: true,
      };
    case actions.SAVE_WEIGHTAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        isAdded: false,
        message: action.error,
      };
    case actions.GET_WEIGHTAGE_INITIATED:
      return {
        ...state,
        error: false,
        message: false,
        loading: true,
      };
    case actions.GET_WEIGHTAGE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        weightageData: action.payload.data,
      };
    case actions.GET_WEIGHTAGE_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        message: action.error,
      };
      case actions.GET_EMPAPP_BYID_INITIATED:
        return {
          ...state,
          error: false,
          message: false,
          loading: true,
        };
      case actions.GET_EMPAPP_BYID_SUCCESS:
        return {
          ...state,
          error: false,
          loading: false,
          empAppData: action.payload.data,
        };
      case actions.GET_EMPAPP_BYID_ERROR:
        return {
          ...state,
          error: true,
          loading: false,
          message: action.error,
        };
      case actions.GET_KRABY_EMPID_INITIATED:
        return {
          ...state,
          error: false,
          message: false,
          loading: true,
        };
      case actions.GET_KRABY_EMPID_SUCCESS:
        return {
          ...state,
          error: false,
          loading: false,
          kraByEmpId: action.payload.data,
        };
      case actions.GET_KRABY_EMPID_ERROR:
        return {
          ...state,
          error: true,
          loading: false,
          message: action.error,
        };
        case actions.SAVE_APPRAISAL_INITIATED:
          return {
            ...state,
            error: false,
            isAdded: false,
            message: false,
            loading: true,
          };
        case actions.SAVE_APPRAISAL_SUCCESS:
          return {
            ...state,
            error: false,
            loading: false,
            isAdded: true,
          };
        case actions.SAVE_APPRAISAL_ERROR:
          return {
            ...state,
            loading: false,
            error: true,
            isAdded: false,
            message: action.error,
          };
    default:
      return state;
  }
};
