import React from 'react';

export default function Baner({ img, content }) {
    return <>
        <div className="flex items-center">
            <div className="w-full sm:w-1/2">
                {content}
            </div>
            <div className="sm:w-1/2">
                <img src={img} alt="We take care of health" />
            </div>
        </div>
    </>;
}