import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../stores/initialState";

export default (state = initialState.location, action) => {
  switch (action.type) {
    case ActionTypes.CURRENT_LOCATION:
      return {
        ...state,
        ...action.payload
      };
      

    default:
      return state;
  }
};
