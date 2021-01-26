import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../config/config";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const getAuthenticationStatus = () => {
    return localStorage.getItem("isAuthenticated!")
}

export { db, auth, getAuthenticationStatus }