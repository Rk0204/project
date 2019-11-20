import { combineReducers } from "redux";
import auth from "./auth";
import location from "./location";
import speed from "./speed"
const rootReducer = combineReducers({
  auth,
  location,
  speed
});

export default rootReducer;
