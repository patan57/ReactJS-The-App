import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return(
        <div>
            <div>
                <NavLink className="nav">NavBar</NavLink>
            </div>
            <div>
                <ul>
                    <li><NavLink className="nav__link" to='/'>Conocenos</NavLink></li>
                    <li><NavLink className="nav__link" to='/categoria'>Productos</NavLink></li>
                    <li><NavLink className="nav__link" to='/categoria'>Contacto</NavLink></li>
                    <li><NavLink className="nav__link" to='/cart'>Carrito <CartWidget /></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;