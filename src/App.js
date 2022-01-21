import './App.css';
import Login from './Components/Login.js'
import Feed from './Components/Feed';

//CREAR USUARIO
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import app from "../src/Configuration/Firebase_Configuration";

//LOGUEARSE USUARIO
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//REGISTRO CON GOOGLE
//import { getAuth, signInWithPopup, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

//LEER BASE DE DATOS



function App() {

  //CREAR USUARIO

  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, "prueba@prueba.es", "prueba123")
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  //LOGUEARSE

  // const auth = getAuth();
  // signInWithEmailAndPassword(auth, "prueba@prueba.es", "prueba123")
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log(user);
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode);
  //   });

  // }

  //REGISTRO CON GOOGLE
  // const provider = new GoogleAuthProvider();
  //signInWithPopup(auth, provider)

  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     // ...
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });
  // const auth = getAuth();
  // signInWithPopup(auth, provider)

  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     // ...
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });

  // getRedirectResult(auth)
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access Google APIs.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;

  //     // The signed-in user info.
  //     const user = result.user;
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });

  //LEER BASE DE DATOS

  // const dbRef = ref(getDatabase());

  // get(child(dbRef, `1`)).then((snapshot) => {
    
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());  
  //   } 
    
  //   else {
  //     console.log("No data available");
  //   }

  // }).catch((error) => {
  //   console.error(error);

  // });

    return (
      <div className="App">

        <Feed/>
      </div>
    );
}

export default App;
