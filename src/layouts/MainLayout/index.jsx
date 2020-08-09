import React from 'react';
import './style.css';

import Navbar from '../../components/Navbar'

export default function MainLayout(props) {
    return <>
        <div className="row all-x mx-0">
            <div className="col s1 p-0 all-x">
                <div className="row all-x mx-0">
                    <div className="col s12 all-x">
                        <div className="card grey lighten-5 all-x m-0">
                            <div className="card-title header">
                                Healthy
                                </div>
                            <ul className="all-x">
                                <li className="sidenav-btn hoverable valign-wrapper ">
                                    <a>Pacientes</a>
                                </li>
                                <li className="sidenav-btn hoverable valign-wrapper">
                                    <a>Recetas</a>
                                </li>
                                <li className="sidenav-btn hoverable valign-wrapper">
                                    <a>Citas</a>
                                </li>
                                <li className="sidenav-btn hoverable valign-wrapper">
                                    <a>Historial</a>
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