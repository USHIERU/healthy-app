import React from 'react';

import img from '../../assets/We-take-care-of-health.svg'

export default function WelcomeBaner() {
    return <>
        <div className="flex items-center">
            <div className="w-full sm:w-1/2">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-green-500">We Take Care Of Your Health</h2>
                <div className="w-32 h-2 bg-green-500 rounded-full mb-5" />
                <p className="text-justify mb-5 text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia asperiores adipisci eius maxime necessitatibus, esse optio obcaecati tempore exercitationem ipsam repellendus ea at! Enim at dolorum impedit exercitationem harum sint?</p>
                <a href='#' className="bg-green-500 rounded-full text-white font-bold py-2 px-10">Explorer</a>
            </div>
            <div className="sm:w-1/2">
                <img src={img} alt="We take care of health" />
            </div>
        </div>
    </>;
}