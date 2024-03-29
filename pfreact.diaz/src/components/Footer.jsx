import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
            
        <div className="footer-column">
          <h3>Contacto</h3>
          <p>Dirección: 123 Calle Principal, Mar Del Plata</p>
          <p>Email: info@example.com</p>
          <p>Teléfono: 123-456-7890</p>
        </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Optica Galileo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
