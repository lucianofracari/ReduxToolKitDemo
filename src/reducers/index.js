import { combineReducers } from "redux";
import { reducer } from "../features/redirectionSlice";

export default combineReducers({
  redirection: reducer
});
