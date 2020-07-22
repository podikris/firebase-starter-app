import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "./index.css";
import { App, serviceWorker } from "./app";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBK128BfALHfJmh6FhgjTn_wr9qlp1oWFo",
  authDomain: "restaurant-reservation-20c77.firebaseapp.com",
  databaseURL: "https://restaurant-reservation-20c77.firebaseio.com",
  projectId: "restaurant-reservation-20c77",
  storageBucket: "restaurant-reservation-20c77.appspot.com",
  messagingSenderId: "1051796773684",
  appId: "1:1051796773684:web:1b49692b8a4c14bdd82361",
  measurementId: "G-NQQRG97G4Z",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
