import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDiQTYbRtn8zO883Ad36fHZuX-MfWmnwCQ",
    authDomain: "fir-c934a.firebaseapp.com",
    projectId: "fir-c934a",
    storageBucket: "fir-c934a.appspot.com",
    messagingSenderId: "582528935582",
    appId: "1:582528935582:web:d6c6d91e53b63bf53a7d8f",
    measurementId: "G-DL8P7ZXM1P"
  };


 export const Firebase = firebase.initializeApp(firebaseConfig);

