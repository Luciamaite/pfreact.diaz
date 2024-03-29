import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'; 
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to={'/'}>
        <div className="logoContainer">
          <img src={require('../img/logo.jpg').default} alt="Logo" />
          <h1>Optica Galileo</h1>
        </div>
      </Link>

      <ul className="navLinks">
        <li>
          <NavLink to={'/'} activeClassName="active">Inicio</NavLink>
        </li>
        <li>
          <NavLink to={'/itemlist'} activeClassName="active">Catálogo</NavLink>
        </li>
        <li>
          <NavLink to={'/cart'} activeClassName="active">Carrito</NavLink>
        </li>
        <li>
          <NavLink to={'/checkout'} activeClassName="active">Checkout</NavLink>
        </li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;

