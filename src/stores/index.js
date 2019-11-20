import { createStore, applyMiddleware, compose } from "redux";
import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import initialState from "./initialState";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
