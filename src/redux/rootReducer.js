import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import app from "./app/reducer";
import login from "./login/reducer";
import employee from "./employee/reducer";
import master from "./master/reducer";
import organization from "./organization/reducer";
const rootReducer = (history) =>
  combineReducers({
    app,
    login,
    employee,
    master,
    organization,
    router: connectRouter(history),
  });
export default rootReducer;
