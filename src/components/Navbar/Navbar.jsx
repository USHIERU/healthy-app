import React from 'react';

import Dropdown from './Dropdown';

import icon from '../../assets/vegetable.svg'

export default function Navbar() {

    const usersOptions = [
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>,
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>,
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>
    ];

    const dietOptions = [
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>,
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>,
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>
    ];

    const optionOptions = [
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>,
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>,
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>
    ];

    const mobileOptions = [
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>,
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>,
        <a className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer"> Option </a>
    ];

    const loginOptions = [
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
        <div className="flex justify-center py-10 -px-2">
            <div className="w-9/12 md:w-1/6 lg:w-1/12">
                <img src={icon} alt="vegetable" className="h-10 mx-auto" />
            </div>
            <div className="w-1/12 md:hidden">
                <Dropdown label={<i class="material-icons">menu</i>} options={mobileOptions} />
            </div>
            <div className="hidden lg:block lg:w-1/12" />
            <div className="hidden md:block md:w-1/6 lg:w-1/12 text-center">
                <Dropdown label={'Users'} options={usersOptions} />
            </div>
            <div className="hidden md:block md:w-1/6 lg:w-1/12 text-center">
                <Dropdown label={'Diet'} options={dietOptions} />
            </div>
            <div className="hidden md:block md:w-1/6 lg:w-1/12 text-center">
                <Dropdown label={'Option'} options={optionOptions} />
            </div>
            <div className="hidden lg:block lg:w-4/12 text-center" />
            <div className="hidden md:block md:w-2/6 lg:w-1/12 text-center">
                <Dropdown
                    label={<button className="text-white font-bold py-2 px-10 rounded-full bg-green-500">Login</button>}
                    options={loginOptions}
                    autoclose={false}
                />
            </div>
        </div>
    </>;
}