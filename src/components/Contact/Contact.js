import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container" id='contacto'>
                <div className="contact-text">
                        <h2>Contacto</h2>
                </div>
            
                <form className="contact-form">
                        <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" name="name" required />
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