// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBqC7fKrLMH8QkCcwA2BujlCPrgmTDEOB0",
  authDomain: "portfolio-site-d0f66.firebaseapp.com",
  projectId: "portfolio-site-d0f66",
  storageBucket: "portfolio-site-d0f66.appspot.com",
  messagingSenderId: "806710102141",
  appId: "1:806710102141:web:225d440447c72480698914",
  measurementId: "G-HTBYEK2R7T",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const db = firebase.database();