import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUu57ZHlnX4AOc8hjVT-C8r0CqbDBmCf4",
  authDomain: "devchat-15dea.firebaseapp.com",
  projectId: "devchat-15dea",
  databaseURL: "https://devchat-15dea-default-rtdb.firebaseio.com/",
  storageBucket: "devchat-15dea.appspot.com",
  messagingSenderId: "230265680588",
  appId: "1:230265680588:web:d63fdd1b5782d4b2bf8869",
  measurementId: "G-NBEKYML7JJ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
