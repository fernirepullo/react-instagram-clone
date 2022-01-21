// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDlIUbTHMDyIeiFkfF5TwU38tl1Xz57RE4",
  authDomain: "fir-test-644c3.firebaseapp.com",
  databaseURL: "https://fir-test-644c3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-test-644c3",
  storageBucket: "fir-test-644c3.appspot.com",
  messagingSenderId: "747871511572",
  appId: "1:747871511572:web:f85f988b9b4e44bdfcb301"
});

const baseDatos = firebaseConfig.firestore();
const auth = firebase.auth();
const almacenamiento = firebase.storage();


export {baseDatos, auth, almacenamiento};

