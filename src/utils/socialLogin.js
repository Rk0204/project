import { AsyncStorage } from 'react-native';
import * as AppAuth from 'expo-app-auth';
import firebase from "../components/Firebase/firebase";

export const GoogleLogin = async (callCB) => {
    try {
        const config = {
            issuer: 'https://accounts.google.com',
            scopes: ['openid', 'profile'],
            /* This is the CLIENT_ID generated from a Firebase project */
            clientId: '581098435818-df57svmd3p2ivkve1miffuah05dggtt3.apps.googleusercontent.com',
          };
          
const authState = await AppAuth.authAsync(config);
//   await cacheAuthAsync(authState);
  console.log('signInAsync', authState);
  callCB(authState);
 
  getCachedAuthAsync()
    }
    catch(e){
        
        callCB({});
    }
}

function cacheAuthAsync(authState) {
    const StorageKey = '@PillarValley:GoogleOAuthKey';
    return AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
  }

  async function getCachedAuthAsync() {
    const StorageKey = '@PillarValley:GoogleOAuthKey';
    /* First we will try and get the cached auth */
    const value = await AsyncStorage.getItem(StorageKey);
    /* Async Storage stores data as strings, we should parse our data back into a JSON */
    const authState = JSON.parse(value);
    console.log('getCachedAuthAsync', authState);
    if (authState) {
      /* If our data exists, than we should see if it's expired */
      if (checkIfTokenExpired(authState)) {
        /*
         * The session has expired.
         * Let's try and refresh it using the refresh token that some
         * OAuth providers will return when we sign-in initially.
         */
        return refreshAuthAsync(authState);
      } else {
        return authState;
      }
    }
    return null;
  }

  function checkIfTokenExpired({ accessTokenExpirationDate }) {
    return new Date(accessTokenExpirationDate) < new Date();
  }

  async function refreshAuthAsync({ refreshToken }) {
    const authState = await AppAuth.refreshAsync(config, refreshToken);
    console.log('refreshAuthAsync', authState);
    await cacheAuthAsync(authState);
    return authState;
  }

  export const  signOutAsync= async ({ accessToken })=> {
    const StorageKey = '@PillarValley:GoogleOAuthKey';
    try {
      await AppAuth.revokeAsync(config, {
        token: accessToken,
        isClientIdProvided: true,
      });
      /*
       * We are removing the cached tokens so we can check on our auth state later.
       * No tokens = Not Signed-In :)
       */
      await AsyncStorage.removeItem(StorageKey);
      return null;
    } catch ({ message }) {
      alert(`Failed to revoke token: ${message}`);
    }
  }