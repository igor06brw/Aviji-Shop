import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBqiQ5PZ9RLU4g99JI3vZjj6X_WK9-6j5Q",
  authDomain: "test-project-31aa6.firebaseapp.com",
  projectId: "test-project-31aa6",
  storageBucket: "test-project-31aa6.appspot.com",
  messagingSenderId: "841132426263",
  appId: "1:841132426263:web:a08a6f697dfad0071b8852"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;