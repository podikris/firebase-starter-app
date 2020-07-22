import firebase from "firebase/app";

export const SignIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
