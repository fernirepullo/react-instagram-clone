import React from 'react'
import '../CSS/Footer.css'

const Footer = () => {
    return (
        <footer>

                <div className="container">

                    <nav className="footer-nav">

                        <ul>
                            <li>
                                <a href="#">Sobre nosotros</a>
                            </li>

                            <li>
                                <a href="#">Soporte</a>
                            </li>

                            <li>
                                <a href="#">Trabajos</a>
                            </li>

                            <li>
                                <a href="#">Privacidad</a>
                            </li>

                            <li>
                                <a href="#">T&eacute;rminos</a>
                            </li>

                            <li>
                                <a href="#">Idioma</a>
                            </li>

                        </ul>

                    </nav>

                    <div className="copyright-notice">&copy; 2022 Fernando Repullo</div>
                </div>
            </footer>
    )
}

export default Footer;