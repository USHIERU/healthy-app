import React, { useEffect } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js'

export default function PersonCard(props) {

    useEffect(() => {
        
    }, []);

    return <>
        <div class="card-panel grey lighten-5 z-depth-1 m-card hoverable" style={{cursor: "pointer"}}>
            <div class="row valign-wrapper" style={{ marginBottom: 0 }}>
                <div class="col s3">
                    <img src={props.img} class="circle responsive-img" />
                </div>
                <div class="col s9">
                    <div className="card-title">
                        {props.name}
                    </div>
                    <p className="right">22:30</p>
                </div>
            </div>
        </div>
    </>;
}