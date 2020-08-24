import React from 'react';

import Dropdown from '../../../components/Dropdown/Dropdown';

export default function Patients() {

    const OPTIONS = [
        <p className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer text-center"> Option </p>,
        <p className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer text-center"> Option </p>,
        <p className="block py-2 rounded-lg text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer text-center"> Option </p>
    ];

    return <>
        <div className="mx-5 sm:mx-12 lg:mx-20 xl:mx-64">
            <div className="flex flex-wrap -mx-2">
                <div className="w-full mb-5">
                    <div className="flex">
                        <div className="hidden lg:block lg:w-1/12 px-2">
                            <button className="bg-green-500 text-white w-full h-full rounded-full"><i className="material-icons align-middle">person_add</i></button>
                        </div>
                        <div className="w-full lg:w-11/12">
                            <input placeholder="🔎 Buscar" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/3 mb-4 px-2">
                    <div className="bg-gray-200 rounded-md w-full hover:shadow-md p-3">
                        <div className="flex -mx-1 md:-mx-2">
                            <div className="w-4/12 px-1 md:px-2">
                                <img src="https://thispersondoesnotexist.com/image" alt="person" className="rounded-lg" />
                            </div>
                            <div className="w-7/12 px-1 md:px-2 my-auto">
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Name: </span><span className="text-gray-900">Random Name</span></p>
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Birthday: </span><span className="text-gray-900">12/12/89</span></p>
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Age: </span><span className="text-gray-900">30 years</span></p>
                            </div>
                            <div className="w-1/12 px-1 md:px-2">
                                <Dropdown label={<i className="material-icons hover:text-green-500 cursor-pointer">more_vert</i>} options={OPTIONS} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 xl:w-1/3 mb-4 px-2">
                    <div className="bg-gray-200 rounded-md w-full hover:shadow-md p-3">
                        <div className="flex -mx-1 md:-mx-2">
                            <div className="w-4/12 px-1 md:px-2">
                                <img src="https://thispersondoesnotexist.com/image" alt="person" className="rounded-lg" />
                            </div>
                            <div className="w-7/12 px-1 md:px-2 my-auto">
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Name: </span><span className="text-gray-900">Random Name</span></p>
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Birthday: </span><span className="text-gray-900">12/12/89</span></p>
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Age: </span><span className="text-gray-900">30 years</span></p>
                            </div>
                            <div className="w-1/12 px-1 md:px-2">
                                <Dropdown label={<i className="material-icons hover:text-green-500 cursor-pointer">more_vert</i>} options={OPTIONS} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 xl:w-1/3 mb-4 px-2">
                    <div className="bg-gray-200 rounded-md w-full hover:shadow-md p-3">
                        <div className="flex -mx-1 md:-mx-2">
                            <div className="w-4/12 px-1 md:px-2">
                                <img src="https://thispersondoesnotexist.com/image" alt="person" className="rounded-lg" />
                            </div>
                            <div className="w-7/12 px-1 md:px-2 my-auto">
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Name: </span><span className="text-gray-900">Random Name</span></p>
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Birthday: </span><span className="text-gray-900">12/12/89</span></p>
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Age: </span><span className="text-gray-900">30 years</span></p>
                            </div>
                            <div className="w-1/12 px-1 md:px-2">
                                <Dropdown label={<i className="material-icons hover:text-green-500 cursor-pointer">more_vert</i>} options={OPTIONS} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 xl:w-1/3 mb-4 px-2">
                    <div className="bg-gray-200 rounded-md w-full hover:shadow-md p-3">
                        <div className="flex -mx-1 md:-mx-2">
                            <div className="w-4/12 px-1 md:px-2">
                                <img src="https://thispersondoesnotexist.com/image" alt="person" className="rounded-lg" />
                            </div>
                            <div className="w-7/12 px-1 md:px-2 my-auto">
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Name: </span><span className="text-gray-900">Random Name</span></p>
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Birthday: </span><span className="text-gray-900">12/12/89</span></p>
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Age: </span><span className="text-gray-900">30 years</span></p>
                            </div>
                            <div className="w-1/12 px-1 md:px-2">
                                <Dropdown label={<i className="material-icons hover:text-green-500 cursor-pointer">more_vert</i>} options={OPTIONS} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 xl:w-1/3 mb-4 px-2">
                    <div className="bg-gray-200 rounded-md w-full hover:shadow-md p-3">
                        <div className="flex -mx-1 md:-mx-2">
                            <div className="w-4/12 px-1 md:px-2">
                                <img src="https://thispersondoesnotexist.com/image" alt="person" className="rounded-lg" />
                            </div>
                            <div className="w-7/12 px-1 md:px-2 my-auto">
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Name: </span><span className="text-gray-900">Random Name</span></p>
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Birthday: </span><span className="text-gray-900">12/12/89</span></p>
                                <p className="text-sm md:text-lg lg:text-base"><span className="text-green-500 font-bold">Age: </span><span className="text-gray-900">30 years</span></p>
                            </div>
                            <div className="w-1/12 px-1 md:px-2">
                                <Dropdown label={<i className="material-icons hover:text-green-500 cursor-pointer">more_vert</i>} options={OPTIONS} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className=" lg:hidden fixed bottom-0 right-0 mb-6 mr-6 bg-green-500 text-white rounded-full w-16 h-16"><i style={{fontSize: '30px'}} className="material-icons align-middle">person_add</i></button>
    </>;
}