import React from 'react'
//import Firebase_Login from '../Configuration/Firebase_Login';
import '../CSS/Login.css'
import Footer from './Footer'

const Login = () => {
    return (

        <div id="wrapper">

            <div className="container">

                <div className="phone-app-demo" />
                <div className="form-data">

                    <form action="">
                        <div className="logo">
                            <h1>Instagram</h1>
                        </div>

                        <input
                            type="text"
                            placeholder="Usuario"
                        />

                        <input type="password" placeholder="Contraseña" />

                        <button className="form-btn" type="submit">
                            Iniciar Sesi&oacute;n
                        </button>

                        <span className="has-separator">O</span>

                        <a href="#" className="facebook-login">
                            <i className="fab fa-facebook" /> Iniciar sesi&oacute;n con Facebook
                        </a>

                        <a className="password-reset" href="#">
                            ¿Olvidó la contrase&ntilde;a?
                        </a>

                    </form>

                    <div className="sign-up">
                        <a href="#">Crear cuenta</a>
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
            
            <Footer></Footer>

        </div>
    )
}

export default Login;