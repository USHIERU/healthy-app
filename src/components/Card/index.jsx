import React from 'react';
import './style.css';

export default function Card({title, children, extras}) {
    return <>
        <div className="card m-card card-overflow scroll">
            <div className="card-content">
                <div className="row">
                    <div className="col s6">
                        <div className="card-title green-text text-accent-4 truncate" style={{ fontWeight: 400 }}>
                            {title}
                        </div>
                    </div>  
                    <div className="col s6">
                        {extras}
                    </div>
                </div>
                {children}
            </div>
        </div>
    </>;
}