import ActionTypes from "../constants/actionType";

export const currentLocation = data => dispatch => {
  dispatch({
    type: ActionTypes.CURRENT_LOCATION,
    payload: data
  });
};

export const gotSixtyCount = data => dispatch => {
  dispatch({
    type: ActionTypes.SPEED_COUNT,
    payload: data
  })
}

export const gotTopSpeed = data => dispatch => {
  dispatch({
    type: ActionTypes.TOP_SPEED,
    payload: data
  })
}

export const saveData = data => dispatch => {
  dispatch({
    type: ActionTypes.SAVE_DATA,
    payload: data
  })
}

export const saveHistoryData = data => dispatch => {
  dispatch({
    type: ActionTypes.HISTORY,
    payload: data
  })
}

export const loginSuccess = (data, user) => dispatch => {
  console.warn("hello");
  dispatch({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: data,
    user
  });
};

export const Registered = () => dispatch => {
  dispatch({
    type: ActionTypes.REGISTERED,
    payload: data
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: ActionTypes.LOGOUT_SUCCESS
  });
};

export const saveStopLocation = data => dispatch => {
  dispatch({
    type: ActionTypes.SAVE_STOP,
    payload: data
  })
}