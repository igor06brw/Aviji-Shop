import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA7lR6aKhS1dgDlEcAmulFuBv_IsZkxBSo",
  authDomain: "auth-development-1fce5.firebaseapp.com",
  projectId: "auth-development-1fce5",
  storageBucket: "auth-development-1fce5.appspot.com",
  messagingSenderId: "839995841672",
  appId: "1:839995841672:web:65657cd4b0eba8df06d33d"
};

export const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
  
export const runFirebase = () => firebase.initializeApp(firebaseConfig)