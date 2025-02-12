import React from "react";
import "./Footer.css";
import pin from "../../assets/pin.png";
import telephone from "../../assets/telephone.png";
import instagram from "../../assets/instagram.png";
import mail from "../../assets/mail.png";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-item"><img src={pin} alt="Location pin" /><h4>Carrer del Pi, 16, Ciutat Vella, 08002 Barcelona</h4></div>
            <div className="footer-item"><img src={telephone} alt="Telephone" /><h4>933 024 393</h4></div>
            <div className="footer-item"><a href="http://www.instagram.com/xarcuterialapineda" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a></div>
            <div className="footer-item"><img src={mail} alt="Email" /> <h4>xarcuterialapineda@gmail.com</h4></div>
        </div>

        <div className="footer-datos">
            <h4>Comestibles la Pineda S.L. | B02664324 | Calle del Pi 16, bajos, 08002 Barcelona</h4>
            </div>
    </footer>
  );
};

export default Footer;
