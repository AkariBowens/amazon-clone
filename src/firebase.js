import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLAyM21C9TEoNk06Z4T_cwdbxXf-TzCrA",
  authDomain: "clone-a4b9f.firebaseapp.com",
  projectId: "clone-a4b9f",
  storageBucket: "clone-a4b9f.appspot.com",
  messagingSenderId: "580017743693",
  appId: "1:580017743693:web:ca0530e3eb2fffef7d7904",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
