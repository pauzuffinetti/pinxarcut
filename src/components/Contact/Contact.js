import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container" id='contacto'>
            <div className="contact-text">
                <h2>Contacto</h2>
                <p>Haz que tu evento sea inolvidable. Contacta con nosotros para más información o para personalizar tu experiencia. Nuestro equipo está listo para atender tus necesidades y hacer de tu celebración un éxito. </p>
            </div>
        
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" id="telefono" name="telefono" required pattern="[0-9]+" title="Solo se permiten números" />

                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;
