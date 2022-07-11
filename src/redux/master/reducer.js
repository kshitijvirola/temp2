import * as actions from "./constant";
const initialState = {
    error: false,
    loading: false,
    message: false,
    isSaved: false,
    isDeleted: false,
    mastertype: {},
    masters: [],
    masterlist: {},
    master: [],
    kra: [],
    kraDetail: {},
    imgPath:{},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SAVE_MASTER_TYPE_INITIATED:
            return {
                ...state,
                error: false,
                isSaved: false,
                message: false,
                loading: true,
            };
        case actions.SAVE_MASTER_TYPE_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                isSaved: true,
            };
        case actions.SAVE_MASTER_TYPE_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                isSaved: false,
                message: action.error,
            };
        case actions.GET_MASTER_TYPE_LIST_INITIATED:
            return {
                ...state,
                error: false,
                message: false,
                loading: true,
            };
        case actions.GET_MASTER_TYPE_LIST_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                masters: action.payload.data,
            };
        case actions.GET_MASTER_TYPE_LIST_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                message: action.error,
            };
        case actions.GET_MASTER_TYPE_BY_ID_INITIATED:
            return {
                ...state,
                error: false,
                message: false,
                loading: true,
            };
        case actions.GET_MASTER_TYPE_BY_ID_SUCCESS:
            return {
                ...state,
                error: false,
                message: false,
                loading: false,
                mastertype: action.payload.data,
            };
        case actions.GET_MASTER_TYPE_BY_ID_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                message: action.error,
            };
        case actions.DELETE_MASTER_TYPE_BY_ID_INITIATED:
            return {
                ...state,
                error: false,
                message: false,
                isDeleted: false,
                loading: true,
            };
        case actions.DELETE_MASTER_TYPE_BY_ID_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                isDeleted: true,
            };
        case actions.DELETE_MASTER_TYPE_BY_ID_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                isDeleted: false,
                message: action.error,
            };
        case actions.SAVE_MASTER_INITIATED:
            return {
                ...state,
                error: false,
                isSaved: false,
                message: false,
                loading: true,
            };
        case actions.SAVE_MASTER_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                isSaved: true,
            };
        case actions.SAVE_MASTER_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                isSaved: false,
                message: action.error,
            };
        case actions.GET_MASTER_LIST_INITIATED:
            return {
                ...state,
                error: false,
                message: false,
                loading: true,
            };
        case actions.GET_MASTER_LIST_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                master: action.payload.data,
            };
        case actions.GET_MASTER_LIST_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                message: action.error,
            };
        case actions.GET_MASTER_BY_ID_INITIATED:
            return {
                ...state,
                error: false,
                message: false,
                loading: true,
            };
        case actions.GET_MASTER_BY_ID_SUCCESS:
            return {
                ...state,
                error: false,
                message: false,
                loading: false,
                masterlist: action.payload.data,
            };
        case actions.GET_MASTER_BY_ID_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                message: action.error,
            };
        case actions.DELETE_MASTER_BY_ID_INITIATED:
            return {
                ...state,
                error: false,
                message: false,
                isDeleted: false,
                loading: true,
            };
        case actions.DELETE_MASTER_BY_ID_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                isDeleted: true,
            };
        case actions.DELETE_MASTER_BY_ID_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                isDeleted: false,
                message: action.error,
            };
        case actions.SAVE_KRA_INITIATED:
            return {
                ...state,
                error: false,
                isSaved: false,
                message: false,
                loading: true,
            };
        case actions.SAVE_KRA_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                isSaved: true,
            };
        case actions.SAVE_KRA_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                isSaved: false,
                message: action.error,
            };
        case actions.GET_KRA_LIST_INITIATED:
            return {
                ...state,
                error: false,
                message: false,
                loading: true,
            };
        case actions.GET_KRA_LIST_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                kra: action.payload.data,
            };
        case actions.GET_KRA_LIST_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                message: action.error,
            };
        case actions.GET_KRA_BY_ID_INITIATED:
            return {
                ...state,
                error: false,
                message: false,
                loading: true,
            };
        case actions.GET_KRA_BY_ID_SUCCESS:
            return {
                ...state,
                error: false,
                message: false,
                loading: false,
                kraDetail: action.payload.data,
            };
        case actions.GET_KRA_BY_ID_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                message: action.error,
            };
        case actions.DELETE_KRA_BY_ID_INITIATED:
            return {
                ...state,
                error: false,
                message: false,
                isDeleted: false,
                loading: true,
            };
        case actions.DELETE_KRA_BY_ID_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                isDeleted: true,
            };
        case actions.DELETE_KRA_BY_ID_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                isDeleted: false,
                message: action.error,
            };
        case actions.SAVE_KPI_INITIATED:
            return {
                ...state,
                error: false,
                isSaved: false,
                message: false,
                loading: true,
            };
        case actions.SAVE_KPI_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                isSaved: true,
            };
        case actions.SAVE_KPI_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                isSaved: false,
                message: action.error,
            };
        case actions.UPLOAD_DOC_INITIATED:
            return {
                ...state,
                error: false,
                message: false,
                loading: true,
            };
        case actions.UPLOAD_DOC_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                message: false,
                imgPath: action.payload.data,
            };
        case actions.UPLOAD_DOC_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.error,
            };
        default:
            return state;
    }
};
