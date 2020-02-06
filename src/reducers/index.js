import { combineReducers } from "redux";
import { RedirectionReducer } from "./redirection";

export default combineReducers({
  redirection: RedirectionReducer
});
