import React from 'react';
import { NavLink } from "react-router-dom";

import Sidebar from '../Sidebar';

import icon from '../../assets/vegetable.svg'

export default function Navbar({ NavigationOptions, sidebarOptions, lastButton, sidebar = true }) {
    return <>
        <div className="flex justify-center py-10 -px-2">
            <div className="w-9/12 md:w-1/6 lg:w-1/12">
                <NavLink to="/">
                    <img src={icon} alt="vegetable" className="h-10 mx-auto" />
                </NavLink>
            </div>
            <div className="w-1/12 md:hidden">
                {sidebar && <Sidebar options={sidebarOptions} />}
            </div>
            <div className="hidden lg:block lg:w-1/12" />
            {NavigationOptions && NavigationOptions.map(option =>
                <div className="hidden md:block md:w-1/6 lg:w-1/12 text-center">
                    {option}
                </div>)}
            <div className="hidden lg:block lg:w-4/12 text-center" />
            <div className="hidden md:block md:w-2/6 lg:w-1/12 text-center">
                {lastButton}
            </div>
        </div>
    </>;
}