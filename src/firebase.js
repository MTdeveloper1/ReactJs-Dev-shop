import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBAFn89Rxy7K1313c6NQg-LiYkWzKeXY7I",
    authDomain: "dev-shop-e0aa0.firebaseapp.com",
    databaseURL: "https://dev-shop-e0aa0-default-rtdb.firebaseio.com",
    projectId: "dev-shop-e0aa0",
    storageBucket: "dev-shop-e0aa0.appspot.com",
    messagingSenderId: "271857209781",
    appId: "1:271857209781:web:a8ceb8276b1e6f77b389fc",
    measurementId: "G-XDKJ0WNESX"
  };
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
