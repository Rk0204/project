import * as syncActions from "./syncAction";
import { makeRequest } from "../constants/request";

// import { Alert } from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import _ from "lodash";
import AppConstants from "../constants/appConstants";
import { AsyncStorage } from "react-native";
// import showToast from "../utils/ToastAndroid";
import jwt_decode from "jwt-decode";


export const getCurrentLocation = term => async dispatch => {
  const data = await this._currentLocation();
  const address = await this._getAddress(data.lat, data.long);

  dispatch(syncActions.currentLocation(address));
};

_currentLocation = async () => {
  let location = await Location.getCurrentPositionAsync({});
  let data = {
    lat: Number,
    long: Number
  };
  data.lat = location.coords.latitude;
  data.long = location.coords.longitude;
  return data;
};

_getAddress = async (lat, long) => {
  let data = {
    country: String,
    city: String,
    street: String,
    postalCode: String,
    name: String,
    region: String
  };

  if (lat && long) {
    let geocode = await Location.reverseGeocodeAsync({
      latitude: lat,
      longitude: long
    });

    data.country = geocode[0].country;
    data.city = geocode[0].city;
    data.street = geocode[0].street;
    data.name = geocode[0].name;
    data.region = geocode[0].region;
    data.postalCode = geocode[0].postalCode;
    return data;
  }
};

export const saveHistoryData = data => async dispatch =>{
  let token = await AsyncStorage.getItem("token");
  console.warn("history",data);
  makeRequest(
    "post",
    `${AppConstants.baseURL}/api/app/history`,
    {data},
    { Authorization: token }
  )
    .then(resp => {
      console.warn("successfull",resp.data)
      alert("successfully posted")
      dispatch(getHistoryData())
    })
    .catch(err => {
      console.warn("error",err.response)
    });
  }


    export const getHistoryData = () => dispatch =>
  makeRequest(
    "get",
    `${AppConstants.baseURL}/api/app/history`,
    null,
  ).then(resp => {
    console.warn(resp.data);
    dispatch(syncActions.saveHistoryData(resp.data))});

  

    export const loginUser = (data, CBFunc) => async dispatch => {
      makeRequest("post", `${AppConstants.baseURL}/api/app/login`, data)
        .then(async response => {
          console.warn(response.data)
          if (response.data.token) {
            await AsyncStorage.setItem("token", response.data.token);
            var decoded = jwt_decode(response.data.token);
            dispatch(syncActions.loginSuccess(response.data.token, decoded));
          } else {
            console.warn("error");
            CBFunc();
          }
        })
        .catch(error => {
          console.warn(error);
          // showToast("Enter Valid Information");
          CBFunc();
        });
    };

    export const registerUser = (data, CBFunc) => dispatch => {
      makeRequest("post", `${AppConstants.baseURL}/api/app/signup`, data)
        .then(response => {
          console.warn(response.data.token);
          console.warn(response.data);
          AsyncStorage.removeItem("token");
          dispatch(syncActions.logout());
          AsyncStorage.setItem("token", response.data.token);
          console.warn("before decode");
          var decoded = jwt_decode(response.data.token);
          console.warn("after decode");
          dispatch(syncActions.loginSuccess(response.data.token, decoded));
          dispatch(syncActions.registered(resp.data));
          CBFunc();
        })
        .catch(error => {
          console.warn(error);
        });
    };

    export const logout = () => async dispatch => {
      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("mode");
      dispatch(syncActions.logout());
    };
    
    

