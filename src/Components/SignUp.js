import React, { useState } from 'react';
import Footer from './Footer';

//CREAR USUARIO

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Configuration/Firebase_Configuration";


const Register = () => {

    //CREAR USUARIO
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const signUp = (event) => {

    //     event.preventDefault();

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in
    //             const user = userCredential.user;

    //             alert(`Bienvenido, ${userCredential.user.email}`);
    //             console.log(user);
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorCode);
    //             console.log(errorMessage);
    //             // ..
    //         });


    //     auth.createUserWithEmailAndPassword(email, password)
            
    //         .catch((error) => alert(error.message));
    // }

    const signUp = (path, event) =>{

        event.preventDefault();

        this.props.history.push(path);
    }

    return <>
        <div id="wrapper">

            <div className="container">

                <div className="phone-app-demo" />
                <div className="form-data">

                    <form action="">

                        <div className="logo">
                            <h1>Fernigram</h1>
                        </div>

                        <input
                            type="text"
                            placeholder="Correo Electr&oacute;nico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(p) => setPassword(p.target.value)}
                        />

                        <button className="form-btn" type="submit" 
                        //onClick={signUp}
                        onClick={() => this.signUp('/feed')}
                        >
                            Registrar usuario
                        </button>

                    </form>

                </div>

            </div>

            <Footer />

        </div>

    </>

};

export default Register;
