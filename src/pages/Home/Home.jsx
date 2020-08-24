import React from 'react';

import Navbar from '../../components/Navbar'
import Baner from '../../components/Baner'
import Dropdown from '../../components/Dropdown'

import img from '../../assets/We-take-care-of-health.svg'

import { setSession } from '../../services/session'

export default function Home() {

    const handdleLogin = () => {
        setSession('Session');
        window.location = process.env.REACT_APP_BASE_HREF;
    }

    const OPTIONS = [
        <p className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </p>,
        <p className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </p>,
        <p className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </p>
    ]

    const navOptions = [
        <Dropdown label={'Options'} options={OPTIONS} />,
        <Dropdown label={'Options'} options={OPTIONS} />,
        <Dropdown label={'Options'} options={OPTIONS} />
    ]

    const loginForm = [
        <form onSubmit={event => event.preventDefault()} className="flex flex-wrap m-3">
            <div className="w-full text-left">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
            </div>
            <div className="w-full text-left">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
            </div>
            <div className="w-full">
                <button onClickCapture={handdleLogin} className="bg-green-500 font-bold text-white py-1 px-8 rounded-full mt-2">Sign In</button>
            </div>
        </form>
    ];

    const banerContent = <>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-green-500">We Take Care Of Your Health</h2>
        <div className="w-full h-1 bg-green-500 rounded-full mb-5" />
        <p className="text-justify mb-5 text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia asperiores adipisci eius maxime necessitatibus, esse optio obcaecati tempore exercitationem ipsam repellendus ea at! Enim at dolorum impedit exercitationem harum sint?</p>
        <button className="bg-green-500 rounded-full text-white font-bold py-2 px-10">Explorer</button>
    </>;

    return <>
        <Navbar
            NavigationOptions={navOptions}
            sidebarOptions={loginForm}
            lastButton={<Dropdown
                label={<button className="text-white font-bold py-2 px-10 rounded-full bg-green-500">Login</button>}
                options={loginForm}
                autoclose={false}
            />}
        />
        <div className="mx-5 sm:mx-12 lg:mx-20 xl:mx-64">
            <Baner
                img={img}
                content={banerContent}
            />
        </div>
    </>;
}