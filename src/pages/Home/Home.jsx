import React from 'react';

import Navbar from '../../components/Navbar'
import WelcomeBaner from '../../components/WelcomeBaner'
import Dropdown from '../../components/Dropdown'

export default function Home() {
    const OPTIONS = [
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>,
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>,
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>
    ]

    const navOptions = [
        <Dropdown label={'Options'} options={OPTIONS} />,
        <Dropdown label={'Options'} options={OPTIONS} />,
        <Dropdown label={'Options'} options={OPTIONS} />
    ]

    const loginForm = [
        <form action="" className="flex flex-wrap m-3">
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
                <button type="submit" className="bg-green-500 font-bold text-white py-1 px-8 rounded-full mt-2">Sign In</button>
            </div>
        </form>
    ];

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
            <WelcomeBaner />
        </div>
    </>;
}