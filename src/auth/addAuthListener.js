import firebase from "firebase/app";

export const authListener = (cb) => {
  return firebase.auth().onAuthStateChanged(cb);
};
