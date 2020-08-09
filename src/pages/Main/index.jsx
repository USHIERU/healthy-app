import React from 'react';

import MainLayout from '../../layouts/MainLayout'
import Card from '../../components/Card'

export default function Main(props) {
    return <>
        <MainLayout>
            <div style={{ marginTop: '50px' }}>
                <div className="row">
                    <div className="col s4">
                        <Card title="Citas" >
                            <div className="row">
                                <div className="col s12">
                                    <PersonCard name="Amabelle	Helian" img="https://thispersondoesnotexist.com/image"/>
                                    <PersonCard name="Elbertine	Cranney" img="https://thispersondoesnotexist.com/image"/>
                                    <PersonCard name="Derrick	Tosspell" img="https://thispersondoesnotexist.com/image"/>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col s4">
                    </div>
                    <div className="col s4">
                        
                    </div>
                </div>
            </div>
        </MainLayout>
    </>;
}

function PersonCard(props) {
    return <>
        <div class="card-panel grey lighten-5 z-depth-1 m-card">
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