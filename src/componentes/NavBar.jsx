import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return(
        <div>
            <div>
                <NavLink className="nav">Marvel Plus</NavLink>
            </div>
            <div>
                <ul className='nav'>
                    <li><NavLink className="nav__link" to="/">Inicio</NavLink></li>
                    <li><NavLink className="nav__link" to="/categoria/film">Películas</NavLink></li>
                    <li><NavLink className="nav__link" to="/categoria/serie">Series</NavLink></li>
                    <li><NavLink className="nav__link" to="/cart">Carrito <CartWidget /></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;