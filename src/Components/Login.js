import React from 'react'
import '../CSS/Login.css'
import Footer from './Footer'

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


const Login = () => {
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
                            placeholder="Usuario"
                        />

                        <input type="password" placeholder="Contraseña" />

                        <button className="form-btn" type="submit">
                            Iniciar Sesi&oacute;n
                        </button>

                        <span className="has-separator">O</span>

                        <a href="#" className="facebook-login">
                            <i className="fab fa-facebook" /> Iniciar sesi&oacute;n con Google
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
            
            <Footer/>

        </div>
    )
}

export default Login;