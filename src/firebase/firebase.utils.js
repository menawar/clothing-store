import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBTWWbtIytPLyxkj179La6PlQ_0LLf3B6s",
  authDomain: "clothing-store-c2b85.firebaseapp.com",
  projectId: "clothing-store-c2b85",
  storageBucket: "clothing-store-c2b85.appspot.com",
  messagingSenderId: "724490930",
  appId: "1:724490930:web:ae36390e0b348ef73687ab",
  measurementId: "G-715ERC6SBR",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
