import React, { useState } from 'react';

export default function Sidebar({ header, options }) {
    const [isOpen, setIsOpen] = useState(false);

    return <>
        <button className="relative font-bold text-gray-800 hover:text-green-500" onClick={() => setIsOpen(prevValue => !prevValue)} >
            <i class="material-icons">menu</i>
        </button>
        {isOpen &&
            <>
                <div className="bg-gray-400 bg-opacity-50 min-w-full min-h-full absolute top-0 left-0" onClick={() => setIsOpen(prevValue => !prevValue)} />
                <div className="bg-gray-200 w-2/3 min-h-full absolute top-0 left-0">
                    {header ?
                        <div className="px-3">
                            <div className="h-32">
                                {header}
                            </div>
                            <div className="w-32 h-1 bg-green-500 rounded-full mb-5" />
                        </div> :
                        <div className="w-32 h-1 bg-green-500 rounded-full mb-5 mt-32" />}
                    {options && options.map(option => option)}
                </div>
            </>
        }
    </>;
}