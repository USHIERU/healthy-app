import React from 'react';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import Patients from './Patients'
import Navbar from '../../components/Navbar'
import Baner from '../../components/Baner'
import Dropdown from '../../components/Dropdown'

import img from '../../assets/online doctor.svg'

import { deleteSession } from '../../services/session'

export default function Admin() {
    const OPTIONS = [
        <p className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer text-center"> Option </p>,
        <p className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer text-center"> Option </p>,
        <p className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer text-center"> Option </p>
    ];

    const navOptions = [
        <NavLink to="/Patients" className="relative font-bold text-gray-800 hover:text-green-500"> Patients </NavLink>,
        <Dropdown label={'Recipes'} options={OPTIONS} />,
        <Dropdown label={'Options'} options={OPTIONS} />
    ];

    const banerContent = <>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-green-500">We Help You Keep Your Patients Healthy</h2>
        <div className="w-full h-1 bg-green-500 rounded-full mb-5" />
        <p className="text-justify mb-5 text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia asperiores adipisci eius maxime necessitatibus, esse optio obcaecati tempore exercitationem ipsam repellendus ea at! Enim at dolorum impedit exercitationem harum sint?</p>
        <button className="bg-green-500 rounded-full text-white font-bold py-2 px-10 cursor-pointer">Explorer</button>
    </>;

    const sidebarOptions = [
        <NavLink to="/Patients" className="block"> Patients </NavLink>,
        <div className="w-full h-px bg-green-500 rounded-full" />,
        <p onClickCapture={() => { deleteSession(); window.location = process.env.REACT_APP_BASE_HREF; }}> Sign out </p>
    ];

    return <>
        <Navbar
            NavigationOptions={navOptions}
            sidebarOptions={sidebarOptions}
            lastButton={<button onClick={() => { deleteSession(); window.location = process.env.REACT_APP_BASE_HREF; }} className="px-5 py-2 rounded-full text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"><i className="material-icons">exit_to_app</i></button>}
        />
        <Switch>
            <Route path='/patients' component={Patients} />
            <Route path='/'>
                <div className="mx-5 sm:mx-12 lg:mx-20 xl:mx-64">
                    <Baner
                        content={banerContent}
                        img={img}
                    />
                </div>
            </Route>
        </Switch>
    </>;
}