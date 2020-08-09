import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
    return <>
        <nav>
            <div className="nav-wrapper grey lighten-5">
                <a href="#" className="brand-logo center green-text text-accent-4">Healthy</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down" style={{ marginRight: 30 }}>
                    <li>
                        <NavLink to="/" className="green-text text-accent-4">Cerrar Sesion</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>;
}