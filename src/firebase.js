import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-99yxGF-EltiOT3Dw7Br3CGu6NZqlsJM",
  authDomain: "linkedin-clone-kdiff.firebaseapp.com",
  projectId: "linkedin-clone-kdiff",
  storageBucket: "linkedin-clone-kdiff.appspot.com",
  messagingSenderId: "1089499523015",
  appId: "1:1089499523015:web:0393572dfea609d01e1be2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db as firebaseDb, auth as firebaseAuth };
