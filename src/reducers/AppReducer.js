import { combineReducers } from "redux";

import appState from "../reducers/AppState";

const appReducer = combineReducers({
  appState
});

export default appReducer;
