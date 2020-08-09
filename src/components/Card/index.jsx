import React from 'react';
import './style.css';

export default function Card(props) {
    return <>
        <div className="card m-card card-overflow scroll">
            <div className="card-content">
                <div className="card-title green-text text-accent-4" style={{fontWeight: 400}}>
                    {props.title}
                </div>
                {props.children}
            </div>
        </div>
    </>;
}