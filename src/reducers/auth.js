import _ from "lodash";
import ActionTypes from "../constants/actionType";
import initialState from "../stores/initialState";

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case ActionTypes.CUSTOM_AUTH:
      return {
        ...state,
        ...action.payload
      };
      case ActionTypes.LOGIN_SUCCESS:
      return{
          ...state,
          token: action.payload,
          userData: action.user,
          message: action.status,
          logValid: true
      }
      case ActionTypes.LOGIN_TYPE:
      return{
          ...state,
          socialLogin: true
      }

  case ActionTypes.REGISTERED:
      return{
          ...state,
          token: action.payload.data,
          registered: true
      }
      case ActionTypes.LOGOUT_SUCCESS:
      return {
          ...state,
          userData: {},
          token: null,
          stored: false,
          socialLogin: false
      };

    default:
      return state;
  }
};
