import { combineReducers } from "redux";

import appState from "../reducers/AppState";
import listReducer from "../reducers/ListReducer";
import appConfig from "../reducers/appConfig";

const appReducer = combineReducers({
  appState,
  listReducer,
  appConfig
});

export default appReducer;
