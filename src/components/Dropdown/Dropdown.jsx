import React, { useState } from 'react';

export default function Dropdown({ label, options, autoclose = true }) {
    const [isOpen, setIsOpen] = useState(false);

    return <>
        <button className="relative font-bold text-gray-800 hover:text-green-500" onClick={() => setIsOpen(prevValue => !prevValue)} >
            {label}
        </button>
        {isOpen &&
            <div onClick={() => autoclose && setIsOpen(prevValue => !prevValue)} onMouseLeave={() => autoclose && setIsOpen(prevValue => !prevValue)} on className="z-10 absolute right-0 lg:right-auto mt-2 w-48 shadow-lg bg-gray-100 rounded-lg">
                {options && options.map(option => option)}
            </div>
        }
    </>;
}