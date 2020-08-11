import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import PacientesQuickview from '../../components/PacientesQuickview';

export default function Pacientes(props) {
    return <>
        <MainLayout>
            <div style={{ marginTop: '50px' }}>
                <div className="row">
                    <div className="col s4">
                        <PacientesQuickview />
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