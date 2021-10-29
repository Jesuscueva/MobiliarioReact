import React from 'react'
import lofoFooter from "../.././../Assets/LogoMobiliarioSloganRGB.png"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer_left">
                    <h3 className="footer__titulo titulo__">
                        COMUNICATE
                    </h3>
                    <div className="footer_links">
                        <a target="_blank" href="https://www.google.com/maps/place/EJECUTA/@-12.0107164,-77.036291,17z/data=!3m1!4b1!4m5!3m4!1s0x9105cf132f8e50c9:0x9acf42b7f6793262!8m2!3d-12.0107267!4d-77.0340983" className="link">
                            <i className="far fa-building"></i>
                            <strong>Oficina Lima -</strong> Ca. Alfa 
                            Centauro 226 Ofic. 804 <br />
                            Urb. La Calera - Lima 34 <br />
                            Lima - Perú 
                        </a>
                        <a target="_blank"  href="tel: (511) 508 0133" className="link">
                            <i className="fas fa-phone-alt"></i>
                            <strong>Teléfono - </strong> (511) 508 0133
                        </a>
                        <a href="tel:996 779 639" className="link">
                            <i className="fas fa-mobile-alt"></i>
                            <strong>Móvil - </strong>    (51) 996 779 639
                        </a>
                        <a href="mailto:consultas@holdingperu.com" className="link">
                            <i className="far fa-envelope"></i>
                            <strong>Email -      </strong> consultas@holdingperu.com
                        </a>
                    </div>
                </div>
                <div className="footer_rigth">
                    <div className="footer__logo">
                        <figure className="contenedor__img">
                            <img src={lofoFooter} alt="Logo MOBILIARIO" />
                        </figure>
                    </div>
                    <div className="footer__redes">
                        <a href="https://www.facebook.com/" className="link__redes" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/" className="link__redes" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/" className="link__redes" target="_blank">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </footer>
            <div className="derechs">
                <p>© 2020 Derechos reservados MOBILIARIO S.A.C.</p>
            </div>
        </>
    )
}

export default Footer
