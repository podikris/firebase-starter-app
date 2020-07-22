import firebase from "firebase/app";

export const SignOut = () => {
  return firebase.auth().signOut();
};
