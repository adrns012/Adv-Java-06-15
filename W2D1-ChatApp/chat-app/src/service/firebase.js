import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAG_2RJpjAx0HcwfxlPPVGJxdNTvTs42rY",
    authDomain: "chat-app-d37c6.firebaseapp.com",
    databaseURL: "https://chat-app-d37c6-default-rtdb.firebaseio.com",
    projectId: "chat-app-d37c6",
    storageBucket: "chat-app-d37c6.appspot.com",
    messagingSenderId: "35967439641",
    appId: "1:35967439641:web:a524cb573986b6cc652b88",
    measurementId: "G-JFYWKP6QPF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth;
  export const db = firebase.database();