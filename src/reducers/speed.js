import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../stores/initialState";

export default (state = initialState.location, action) => {
  switch (action.type) {
    case ActionTypes.SPEED_COUNT:
      return {
        ...state,
        speedCount: action.payload
      };
      case ActionTypes.TOP_SPEED:
      return {
        ...state,
        topSpeed: action.payload
      };
      case ActionTypes.SAVE_DATA:
      return {
        ...state,
        savedData: action.payload
      };
      case ActionTypes.HISTORY:
      return {
        ...state,
        history: action.payload
      };
      case ActionTypes.SAVE_STOP:
      return {
        ...state,
        stopData: action.payload
      };

    default:
      return state;
  }
};
