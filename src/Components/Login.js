import React, { useState } from 'react'
import '../CSS/Login.css'
import Footer from './Footer'
import { useNavigate } from 'react-router';

//REGISTRO USUARIO
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Configuration/Firebase_Configuration";


//REGISTRO CON GOOGLE
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    let navigate = useNavigate();

    //LOGIN CON CORREO
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null); 

    //LOGIN CON GOOGLE
    const loginGoogle = (event) =>{

        event.preventDefault();

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) =>{

                const credenciales = GoogleAuthProvider.credentialFromResult(result);
                const token = credenciales.accessToken;
                const user = result.user;
                console.log("Conectado con google");
                navigate("/feed");
            })

            .catch((error) =>{

                const errorCode = error.code;
                const errorMessage = error.message;
                const correoUsuario = error.email;
                const credencialUsuario = GoogleAuthProvider.credentialFromError(error);

                console.log(errorCode);
                console.log(errorMessage);
                console.log(correoUsuario);
                console.log(credencialUsuario);
            })
    }


    //LOGIN CON CORREO Y CONTRASEÑA

    const login = (event) =>{

        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in

            setUser(userCredential.user);
            console.log(user);
            
        })
        .catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
        });

        auth.signInWithEmailAndPassword(email, password)
            .then(navigate('/feed'))
            .catch((error) => alert(error.message));

    }

    return (

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

                        <input type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(p) => setPassword(p.target.value)}
                        />

                        <button className="form-btn" type="submit" onClick={login}>
                            Iniciar Sesi&oacute;n
                        </button>

                        <span className="has-separator">O</span>

                        <button className="form-btn" type="submit" onClick={loginGoogle}>
                            Iniciar Sesi&oacute;n con Google
                        </button>

                        <a className="password-reset" href="#">
                            ¿Olvidó la contrase&ntilde;a?
                        </a>

                    </form>

                    <div className="sign-up">
                        <a href="/signup">Crear cuenta</a>
                    </div>

                    <div className="get-the-app">

                        <span>APP disponible en</span>

                        <div className="badge">

                            <img
                                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                                alt="android App"
                            />

                            <img
                                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                                alt="ios app"
                            />

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Login;