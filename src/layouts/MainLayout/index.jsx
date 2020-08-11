import React from 'react';
import './style.css';
import { NavLink } from "react-router-dom";

import Navbar from '../../components/Navbar'
import vegetable from '../../assets/vegetable.svg'

export default function MainLayout(props) {

    return <>
        <div className="row all-x mx-0">
            <div className="col s1 p-0 all-x">
                <div className="row all-x mx-0">
                    <div className="col s12 all-x">
                        <div className="card grey lighten-5 all-x m-0">
                            <div className="card-title header center">
                                <img src={vegetable} alt="vegetable" width="50px" />
                            </div>
                            <ul className="all-x">
                                <li className="sidenav-btn valign-wrapper">
                                    <NavLink to={'/pacientes'} className="center hoverable">pacientes</NavLink>
                                </li>
                                <li className="sidenav-btn valign-wrapper">
                                    <a className="center hoverable">Recetas</a>
                                </li>
                                <li className="sidenav-btn valign-wrapper">
                                    <a className="center hoverable">Citas</a>
                                </li>
                                <li className="sidenav-btn valign-wrapper">
                                    <a className="center hoverable">Historial</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s11 p-0">
                <Navbar />
                <div className="row">
                    <div className="col s10 offset-s1">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    </>;
}