import React from 'react';
import './style.css';

export default function Card(props) {
    return <>
        <div className="card m-card hoverable">
            <div className="card-content">
                <div className="card-title light-blue-text text-darken-3" style={{fontWeight: 400}}>
                    {props.title}
                </div>
                {props.children}
            </div>
        </div>
    </>;
}