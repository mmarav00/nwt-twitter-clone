import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAAjsPNGkcarjvTpV8eYA6Wnc-i4uA-Wlw",
  authDomain: "nwt-twitter-clone.firebaseapp.com",
  projectId: "nwt-twitter-clone",
  storageBucket: "nwt-twitter-clone.appspot.com",
  messagingSenderId: "847666020354",
  appId: "1:847666020354:web:24d04934d3f6b56153a71b",
  measurementId: "G-Y13XB1M8RL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
