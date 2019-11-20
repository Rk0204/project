
import * as firebase from 'firebase'  // Should not be used elsewhere in the project

firebase.initializeApp({
    apiKey: "AIzaSyCqeZT2u7i099uHOHGtf7RNHkaPw5XofkM",                             // Auth / General Use
    authDomain: "spindle-7dc7b.firebaseapp.com",         // Auth with popup/redirect
    databaseURL: "https://Spindle.firebaseio.com", // Realtime Database
    storageBucket: "Spindle.appspot.com",          // Storage
    messagingSenderId: "30978557016"                  // Cloud Messaging
  });

export default firebase;