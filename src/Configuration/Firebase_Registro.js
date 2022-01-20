import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./Firebase_Configuration";

const auth = getAuth();
createUserWithEmailAndPassword(auth, "prueba@prueba.es", "prueba123")
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

